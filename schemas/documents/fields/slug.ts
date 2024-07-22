import { defineType } from "sanity";

export default defineType({
  title: "Slug",
  name: "slug",
  type: "slug",
  validation: (Rule) => Rule.required(),
});
