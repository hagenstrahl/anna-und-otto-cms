import productList from "../../models/product-list";
import { GrRestaurant } from "react-icons/gr";

export default {
  type: "document",
  name: "menu",
  title: "Speisekarte",
  icon: GrRestaurant,
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
