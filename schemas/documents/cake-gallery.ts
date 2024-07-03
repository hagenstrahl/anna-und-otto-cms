import { defineField, defineType } from "sanity";
import image from "./fields/image";

export default defineType({
  type: "document",
  name: "cakeGallery",
  title: "Torten",
  fields: [
    defineField({
      type: "array",
      name: "images",
      title: "Galerie",
      of: [image],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Torten",
      };
    },
  },
});
