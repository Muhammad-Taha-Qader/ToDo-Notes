import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';


export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {sourceType: 'commonjs'},
    rules: {
        'quotes': ['error', 'single'], // Enforce single quotes
        'semi': ['error', 'always'] // Require semicolons
    }
  },
  {files: ['**/*.js'], languageOptions: {sourceType: 'commonjs'}},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];