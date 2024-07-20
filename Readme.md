# To Do Notes
Here is a mini project of To Do Notes.
An optimized version of my previous [ToDo](https://github.com/Muhammad-Taha-Qader/ToDo)

### Technologies:
- HTML
- CSS
- Tailwind
- JS, ES6, TS

### Prerequisites:
- Node v20.15.1 installed
#### To Run the project:
- run ``` npm i ```
- To use Tailwind: ``` npx tailwindcss -i ./style.css -o ./des/output.css --watch ``` else no CSS will be available
- If you face any ESLint errors you can see the Environment setup below


### Environment:
- VS Code 1.91.1
- Node v20.15.1
- npm 10.7.0
- ESLint 8.56.0
    - To set up ESLint:
        - Install ESLint v3.0.10 VSCode plugin by Microsoft
        - npm install eslint -g OR npm install eslint
        - eslint --init OR npx eslint --init
        - You might want to include the following in your eslint.config.mjs:
        ``` export default [
            {
                files: ["**/*.js"],
                languageOptions: {sourceType: "commonjs"},
                rules: {
                    'quotes': ['error', 'single'], // Enforce single quotes
                    'semi': ['error', 'always'] // Require semicolons
                }
            },
            {languageOptions: { globals: globals.browser }},
            pluginJs.configs.recommended,
        ]; 
        ```
- Tailwind
    - Follow https://tailwindcss.com/docs/installation for installation



