export const slug = {
  title: "Slug",
  name: "slug",
  type: "slug",
  options: {
    source: (doc) => ({
      title: doc.title,
      date: doc.date,
      id: doc._id,
      type: doc._type,
    }),
  },
  validation: (Rule) => Rule.required(),
};
