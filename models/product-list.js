import { HiOutlineClipboardList } from "react-icons/hi";

export default {
  type: "document",
  name: "productList",
  title: "Produkt Liste",
  icon: HiOutlineClipboardList,
  fields: [
    {
      type: "string",
      name: "title",
      title: "Titel",
      validation: (Rule) => Rule.required(),
    },
    {
      type: "array",
      name: "products",
      title: "Produkte",
      of: [{ type: "reference", to: [{ type: "product" }] }],
    },
  ],
};
