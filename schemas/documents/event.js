import { MdEventAvailable } from "react-icons/md";
import { slug } from "./fields/slug";

export default {
  type: "document",
  name: "event",
  title: "Veranstaltungen",
  icon: MdEventAvailable,
  fields: [
    {
      type: "string",
      name: "title",
      title: "Titel",
      validation: (Rule) => Rule.required(),
    },
    {
      type: "text",
      name: "subtitle",
      title: "Untertitel",
      rows: 2,
    },
    {
      type: "datetime",
      name: "date",
      title: "Datum",
      validation: (Rule) => Rule.required(),
    },
    {
      type: "array",
      name: "Beschreibung",
      title: "Beschreibung",
      of: [{ type: "block" }],
      validion: (Rule) => Rule.required(),
    },
    {
      type: "image",
      name: "titleImage",
      title: "Titelbild",
      options: {
        hotspot: true,
      },
      fields: [
        {
          type: "string",
          name: "alt",
          title: "Alternativer Text",
          description:
            "wird angezeigt, wenn das Bild nicht geladen werden konnte",
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    slug,
    {
      type: "object",
      name: "contact",
      title: "Kontaktdaten für Anmeldung",
      fields: [
        {
          type: "string",
          name: "tel",
          title: "Telefonnummer",
          validation: (Rule) => Rule.required(),
        },
        {
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
        },
      ],
      validation: (Rule) => Rule.required(),
    },
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
};
