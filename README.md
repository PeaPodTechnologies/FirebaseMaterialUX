# Firebase Material UX

A set of React (TypeScript) UX components for Firebase database CRUD and cloud functions flow.

## Features

- [ ] Firebase Database CRUD w/ State-Context Management
- [ ] Firebase Cloud Functions Dynamic Conditional Flow (DCF)

# Development

## Requirements

- Node.js npm: [Guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- Global Dependencies: `npm install -g node-gyp yarn react typescript`

## Project Initialization

1. Install Yarn: `yarn init; rm package-lock.json; yarn`

2. Create the app: `yarn create next-app --typescript`

3. Add ESLint: `npx eslint --init`

4. Add the following to `eslint.json`:

```json
"extends" : [
    //...
    "prettier"
]
```

5. Add and run prettier: `yarn add --dev --exact prettier eslint-config-prettier; yarn prettier`

6. Create `.prettierrc.json`:

```bash
echo $'{
  "semi" : true,
  "singleQuote" : true,
  "useTabs": false
  "tabWidth" : 2,
  "printWidth" : 80,
  "trailingComma" : "es5",
  "bracketSpacing" : true,
  "arrowParens" : "always",
  "endOfLine" : "lf"

}'> .prettierrc.json
```

7. Add the following to `package.json/scripts{...}`:

```json
"scripts" : {
  // ...
  "eslint" : "eslint src/**",
  "prettier" : "prettier --write ."
}
```

8. Install MaterialUI: `yarn add @mui/material @emotion/react @emotion/styled @mui/icons-material`

9. Install Next.js: `yarn add next`

10. Install PostCSS/Tailwind CSS: `yarn add -D tailwindcss postcss autoprefixer`

11. Install Jest: `yarn add -D jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom; yarn create jest@latest`