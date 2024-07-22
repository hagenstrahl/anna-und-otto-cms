import { defineArrayMember, defineField, defineType } from "sanity";
import productList from "./product-list";

export default defineType({
  type: "document",
  name: "productCategory",
  title: "Produktkategorie",
  fields: [
    ...productList.fields,
    defineField({
      type: "array",
      name: "sublists",
      title: "Unterlisten",
      of: [
        defineArrayMember({ type: "reference", to: [{ type: "productList" }] }),
      ],
    }),
  ],
});
