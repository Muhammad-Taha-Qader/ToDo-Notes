import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"},
  rules: {
    'quotes': ['error', 'single'], // Enforce single quotes
    'semi': ['error', 'always'] // Require semicolons
  }
  },
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
];