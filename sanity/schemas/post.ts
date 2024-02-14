import { defineField, defineType } from "sanity";
import { format, parseISO } from "date-fns";
import { BookIcon } from "@sanity/icons";

export default defineType({
  name: "post",
  title: "Статьи",
  icon: BookIcon,
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Заголовок",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Имя в URL",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Дата публикации",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Главное фото",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Краткое описание",
      type: "text",
      description: "Использьзуется в превью к статье",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "content",
      title: "Основной текст статьи",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "caption",
              type: "string",
              title: "Подпись к фото",
            },
            {
              name: "alt",
              type: "string",
              title: "Альтернативный текст",
              description:
                'Важен для поисковых систем и доступности. Пример: "Фото Стоквартирного дома".',
            },
          ],
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "gallery",
      title: "Фотографии для слайдера",
      type: "object",
      description: "Дополнительные фотографии.",
      fields: [
        {
          name: "images",
          type: "array",
          title: "Фотографии",
          of: [
            {
              name: "image",
              type: "image",
              title: "Фотография",
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: "alt",
                  type: "string",
                  title: "Альтернативный текст",
                },
              ],
            },
          ],
          options: {
            layout: "grid",
          },
        },
      ],
    }),
    defineField({
      name: "more",
      title: "Рекомендации",
      type: "reference",
      to: [{ type: "post" }],
      description: "Рекомендуемые статьи для дальнейшего чтения",
    }),
  ],

  preview: {
    select: {
      title: "title",
      media: "mainImage",
      date: "date",
    },
    prepare({ title, media, date }) {
      const subtitles = [
        date && `on ${format(parseISO(date), "LLL d, yyyy")}`,
      ].filter(Boolean);

      return { title, media, subtitle: subtitles.join(" ") };
    },
  },
});
