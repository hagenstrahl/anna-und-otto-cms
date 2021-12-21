import image from "./fields/image";

export default {
  type: "document",
  name: "cakeGallery",
  title: "Torten",
  __experimental_actions: ["create", "update", /*'delete',*/ "publish"],
  fields: [
    {
      type: "array",
      name: "images",
      title: "Galerie",
      of: [image],
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Torten",
      };
    },
  },
};
