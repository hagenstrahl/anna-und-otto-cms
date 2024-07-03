import { HiOutlineClipboardList } from "react-icons/hi";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "productList",
  title: "Produkt Liste",
  icon: HiOutlineClipboardList,
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Titel",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: "array",
      name: "products",
      title: "Produkte",
      of: [defineArrayMember({ type: "reference", to: [{ type: "product" }] })],
    }),
  ],
});
