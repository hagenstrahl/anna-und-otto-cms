import { MdFastfood } from "react-icons/md";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "product",
  title: "Produkt",
  icon: MdFastfood,
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Titel",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: "number",
      name: "price",
      title: "Preis",
      validation: (Rule) => Rule.required().positive().precision(2),
    }),
    defineField({
      type: "array",
      name: "description",
      title: "Beschreibung",
      of: [defineArrayMember({ type: "block" })],
    }),
  ],
});
