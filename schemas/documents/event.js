import { MdEventAvailable } from "react-icons/md";

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
    },
  ],
};
