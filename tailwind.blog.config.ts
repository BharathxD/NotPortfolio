import type { Config } from "tailwindcss";
import baseConfig from "./tailwind.config";

const config = {
  content: baseConfig.content,
  plugins: baseConfig.plugins.concat([require("@tailwindcss/typography")]),
} satisfies Config;

export default config;
