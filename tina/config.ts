import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  clientId: process.env.VITE_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: process.env.TINA_MEDIA_ROOT ?? "images",
      publicFolder: process.env.TINA_PUBLIC_FOLDER ?? 'static',
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "cms/articles",
        defaultItem: () => {
          return {
            title: "New Post",
            date: new Date().toISOString(),
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "slug",
            label: "Slug",
            required: true,
          },
          {
            type: "string",
            name: "excerpt",
            label: "Excerpt",
            required: true,
          },
          {
            type: "image",
            name: "coverImage",
            label: "Cover Image",
          },
          {
            type: "string",
            name: "coverImageAlt",
            label: "Cover Image Alt Text",
          },
          {
            type: "boolean",
            name: "showImage",
            label: "Show Cover Image",
            description: "Whether to actually show the cover image on the page or just use it as a preview for social media links"
          },
          {
            type: "image",
            name: "socialImage",
            label: "Social Image",
            description: "Image to use when sharing on social media. If not provided, the cover image will be used instead."
          },
          {
            type: "boolean",
            name: "showToc",
            label: "Show Table of Contents",
          },
          {
            type: "boolean",
            name: "hidden",
            label: "Is hidden",
          },
          {
            type: "string",
            name: "categories",
            label: "Categories",
            list: true,
            options: [
              '日常',
              '生活',
              '雜音'
            ],
          },
          {
            type: "datetime",
            name: "date",
            label: "Publish Date",
          },
          {
            type: "datetime",
            name: "updated",
            label: "Last modified date",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
