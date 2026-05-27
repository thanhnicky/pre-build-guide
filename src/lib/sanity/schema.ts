import { defineField, defineType } from "sanity";

export const postSchema = defineType({
  name: "post",
  title: "Bài viết",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Tiêu đề",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Đường dẫn URL",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Ngày đăng",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Sơn gỗ hệ nước", value: "son-go-he-nuoc" },
          { title: "Kỹ thuật thi công", value: "ky-thuat" },
          { title: "Xuất khẩu", value: "xuat-khau" },
          { title: "Tiêu chuẩn", value: "tieu-chuan" },
          { title: "Hướng dẫn", value: "huong-dan" },
        ],
      },
    }),
    defineField({
      name: "excerpt",
      title: "Tóm tắt (hiển thị ở danh sách bài viết)",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: "mainImage",
      title: "Ảnh bìa",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "body",
      title: "Nội dung bài viết",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Mô tả ảnh (alt text)",
              type: "string",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "seoDescription",
      title: "Mô tả SEO (meta description)",
      type: "text",
      rows: 2,
      validation: (Rule) => Rule.max(160),
    }),
  ],
  preview: {
    select: { title: "title", media: "mainImage", subtitle: "excerpt" },
  },
});
