import { GrRestaurant } from "react-icons/gr";

export default {
  type: "document",
  name: "menu",
  title: "Speisekarte",
  icon: GrRestaurant,
  fields: [
    {
      type: "array",
      name: "productCategories",
      title: "Produktkategorien",
      of: [{ type: "reference", to: [{ type: "productCategory" }] }],
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Speisekarte",
      };
    },
  },
};
