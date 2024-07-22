/// <reference types="vite/client" />

import { defineConfig, WorkspaceOptions } from "sanity";
import { RobotIcon, RocketIcon } from "@sanity/icons";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import schemaTypes from "./schemas/schema";
import deskStructure from "./deskStructure";

const commonWorkspace: Pick<
  WorkspaceOptions,
  "projectId" | "plugins" | "tools" | "schema" | "document"
> = {
  projectId: "ksdn393e",
  plugins: [
    structureTool({
      structure: deskStructure,
    }),
    visionTool(),
  ],
  tools: (prev) => {
    // 👇 Uses environment variables set by Vite in development mode
    if (import.meta.env.DEV) {
      return prev;
    }
    return prev.filter((tool) => tool.name !== "vision");
  },

  schema: {
    types: schemaTypes,
  },

  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === "global") {
        return prev.filter((templateItem) =>
          ["event"].includes(templateItem.templateId)
        );
      }
      return prev;
    },
    actions: (prev, { schemaType }) => {
      if (["cakeGallery", "menu"].includes(schemaType)) {
        return prev.filter(
          ({ action }) =>
            !["unpublish", "delete", "duplicate"].includes(action ?? "")
        );
      }
      return prev;
    },
  },
};

const productionWorkspace: WorkspaceOptions = {
  ...commonWorkspace,
  name: "production-workspace",
  basePath: "/production",
  title: "Production Workspace",
  subtitle: "production",
  dataset: "production",
  icon: RobotIcon,
};

const developmentWorkspace: WorkspaceOptions = {
  ...commonWorkspace,
  name: "development-workspace",
  basePath: "/development",
  title: "Development Workspace",
  subtitle: "development",
  dataset: "development",
  icon: RocketIcon,
};

export default defineConfig([
  productionWorkspace,
  ...(import.meta.env.DEV ? [developmentWorkspace] : []),
]);
