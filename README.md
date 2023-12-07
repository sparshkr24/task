# Assignment Details

**Assigned by:** GrowMeOrganic

**Tech Stack:** React, Vite, TypeScript, MaterialUI

## Functionalities

### Page 1
- It contains a form with fields for Name, Phone Number, and Email.
- Validation Rules:
  1. Phone Number field only accepts numerical digits and must be exactly 10 digits long.
  2. The Email field must contain the "@" character for validation.

- If a user tries to access Page 2 without entering details, they will be automatically redirected to Page 1.

### Page 2
- Displays a Material UI (MUI) data grid that fetches dummy data from an API using Axios library.
- Includes an accordion component displaying departments and their sub-departments.
- Accordian requirements:
  1. Users can expand and collapse sub-departments.
  2. Users can select departments or sub-departments.
  3. If a user selects a department, all its sub-departments will be selected in the UI.
  4. If all sub-departments of a department are selected, the parent department will also be selected.

- Users cannot access Page 1 before logging out from Page 2. (Logging out removes userDetails from localStorage.)

## Folder Structure

- src
  - Components
    - Accordian.tsx (Component 2 for Page 2)
    - Table (Component 1 for Page 1)
  - helper
    - helper.ts (Contains helper functions for the Accordion component)
    - types.ts (Contains interfaces and types for code modularity and reusability)
  - page
    - page1.tsx (Layout for Page 1)
    - page2.tsx (Layout for Page 2)
  - App.tsx (Contains React routes and navigation links)
  - main.tsx (Main file)

## Getting started
```bash
npm install
npm run dev
```


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
