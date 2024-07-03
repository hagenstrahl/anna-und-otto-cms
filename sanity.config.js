import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import schemaTypes from "./schemas/schema";
import deskStructure from "./deskStructure";

export default defineConfig({
  name: "default",
  title: "ANNA & OTTO",
  projectId: "ksdn393e",
  dataset: "production",
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
          ({ action }) => !["unpublish", "delete", "duplicate"].includes(action)
        );
      }
      return prev;
    },
  },
});
