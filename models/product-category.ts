import productList from "./product-list";

export default {
  type: "document",
  name: "productCategory",
  title: "Produktkategorie",
  fields: [
    ...productList.fields,
    {
      type: "array",
      name: "sublists",
      title: "Unterlisten",
      of: [{ type: "reference", to: [{ type: "productList" }] }],
    },
  ],
};
