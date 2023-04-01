module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "error",
    indent: ["error", 2, { SwitchCase: 1 }],
    "linebreak-style": ["error", "windows"],
    quotes: ["error", "double", { avoidEscape: true }],
    semi: ["error", "always"],
    "no-empty-function": "off",
    "@typescript-eslint/no-non-null-assertion": 0,
    "@typescript-eslint/no-empty-function": 1,
    "react/display-name": "off",
    "react/prop-types": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
  },
};
