import { MdFastfood } from "react-icons/md";

export default {
  type: "document",
  name: "product",
  title: "Produkt",
  icon: MdFastfood,
  fields: [
    {
      type: "string",
      name: "title",
      title: "Titel",
      validation: (Rule) => Rule.required(),
    },
    {
      type: "number",
      name: "price",
      title: "Preis",
      validation: (Rule) => Rule.required().positive().precision(2),
    },
    {
      type: "array",
      name: "description",
      title: "Beschreibung",
      of: [{ type: "block" }],
    },
  ],
};
