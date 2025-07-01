import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier";

export default defineConfig([
  // 1. Базовые правила ESLint
  js.configs.recommended,
  
  // 2. React правила
  ...pluginReact.configs.recommended,
  
  // 3. Глобальные переменные и настройки парсера
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: "latest",
        sourceType: "module"
      }
    }
  },
  
  // 4. Интеграция Prettier (использует ваш .prettierrc)
  {
    plugins: {
      prettier: eslintPluginPrettier
    },
    rules: {
      "prettier/prettier": [
        "error",
        {}, // Пустой объект = использовать настройки из .prettierrc
        { usePrettierrc: true } // Явное указание использовать ваш конфиг
      ]
    }
  },
  
  // 5. Должен быть ПОСЛЕДНИМ: отключает конфликтующие правила
  eslintConfigPrettier
]); 