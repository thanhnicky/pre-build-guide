import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { postSchema } from "./src/lib/sanity/schema";

export default defineConfig({
  name: "songo-studio",
  title: "Sơn Gỗ Lotus — Quản trị nội dung",
  projectId: "fzoqzuni",
  dataset: "production",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [postSchema],
  },
});
