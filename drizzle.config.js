import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials:{
    url:'postgresql://ai_Study_app_owner:g3mGy6qburEI@ep-cool-credit-a5fy9v29.us-east-2.aws.neon.tech/ai_Study_app?sslmode=require'
  }
});

