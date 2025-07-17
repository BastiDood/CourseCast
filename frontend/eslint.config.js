import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

import { FlatCompat } from "@eslint/eslintrc";
import { defineConfig } from "eslint/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });
export default defineConfig(
  compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["src/**/*.{j,t}s{x,}"],
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        { varsIgnorePattern: "^_", argsIgnorePattern: "^_" },
      ],
    },
  },
  {
    ignores: ["src/convex/_generated/**/*"],
  },
);
