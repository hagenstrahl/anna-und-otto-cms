import { GrRestaurant } from "react-icons/gr";
import { defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "menu",
  title: "Speisekarte",
  icon: GrRestaurant,
  fields: [
    defineField({
      type: "array",
      name: "productCategories",
      title: "Produktkategorien",
      of: [{ type: "reference", to: [{ type: "productCategory" }] }],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Speisekarte",
      };
    },
  },
});
