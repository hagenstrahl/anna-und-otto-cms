import { MdEventAvailable } from "react-icons/md";
import image from "./fields/image";
import slug from "./fields/slug";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "event",
  title: "Veranstaltungen",
  icon: MdEventAvailable,
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Titel",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: "text",
      name: "subtitle",
      title: "Untertitel",
      rows: 2,
    }),
    defineField({
      type: "datetime",
      name: "date",
      title: "Datum",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: "array",
      name: "Beschreibung",
      title: "Beschreibung",
      of: [defineArrayMember({ type: "block" })],
      validation: (Rule) => Rule.required(),
    }),
    defineField({ ...image, name: "titleImage", title: "Titelbild" }),
    defineField(slug),
    defineField({
      type: "object",
      name: "contact",
      title: "Kontaktdaten für Anmeldung",
      fields: [
        defineField({
          type: "string",
          name: "tel",
          title: "Telefonnummer",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          type: "string",
          name: "email",
          title: "E-Mail-Adresse",
          validation: (Rule) =>
            Rule.required().regex(
              /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
              {
                name: "email",
                invert: false,
              }
            ),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: "title", date: "date" },
    prepare(selection) {
      const { title, date } = selection;
      return {
        title: title,
        subtitle: date?.split("T")[0],
      };
    },
  },
});
