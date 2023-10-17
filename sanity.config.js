import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

const config = defineConfig({
  name: "default",
  title: "Video Courses App",

  projectId: "0zegtjo5",
  dataset: "production",

  apiVersion: "2023-09-217",

  plugins: [deskTool(), visionTool()],

  basePath: "/admin",

  schema: {
    types: schemaTypes,
  },
});

export default config;
