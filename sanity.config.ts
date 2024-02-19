import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";

const title = process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || "Храш - админ";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  title,
  schema,
  plugins: [structureTool(), visionTool({ defaultApiVersion: apiVersion })],
});
