import { defineField, defineType } from "sanity";

export default defineType({
  name: "category",
  title: "Категории",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Название категории",
      type: "string",
    }),
  ],
});
