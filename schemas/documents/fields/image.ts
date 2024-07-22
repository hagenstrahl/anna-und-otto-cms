import { defineField, defineType } from "sanity";

export default defineType({
  type: "image",
  name: "image",
  title: "Bild",
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      type: "string",
      name: "alt",
      title: "Alternativer Text",
      description: "wird angezeigt, wenn das Bild nicht geladen werden konnte",
    }),
  ],
  preview: {
    select: {
      title: "alt",
      media: "asset",
    },
  },
});
