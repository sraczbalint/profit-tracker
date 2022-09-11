module.exports = {
  // Configuration for JavaScript files
  extends: [
    "airbnb-base",
    "next/core-web-vitals",
    "plugin:prettier/recommended",
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        allow: ["warn", "error"],
      },
    ],
    "import/prefer-default-export": "off", // Named export is easier to refactor automatically
  },
  overrides: [
    // Configuration for TypeScript files
    {
      files: ["**/*.ts", "**/*.tsx"],
      plugins: ["@typescript-eslint", "unused-imports"],
      extends: [
        "airbnb-typescript",
        "next/core-web-vitals",
        "plugin:jsx-a11y/strict",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
      ],
      parserOptions: {
        project: "./tsconfig.json",
      },
      rules: {
        "prettier/prettier": [
          "error",
          {
            endOfLine: "auto",
            printWidth: 80,
            singleQuote: false,
          },
        ],
        "no-console": [
          "error",
          {
            allow: ["warn", "error"],
          },
        ],
        "@typescript-eslint/no-shadow": "off",
        "react/destructuring-assignment": "off", // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
        "jsx-a11y/anchor-is-valid": "off", // Next.js use his own internal link system
        "react/require-default-props": "off", // Allow non-defined react props as undefined
        "react/jsx-props-no-spreading": "off", // _app.tsx uses spread operator and also, react-hook-form
        "@next/next/no-img-element": "off", // We currently not using next/image because it isn't supported with SSG mode
        "import/order": [
          "warn",
          {
            groups: ["builtin", "external", "internal"],
            pathGroups: [
              {
                pattern: "react",
                group: "external",
                position: "before",
              },
            ],
            pathGroupsExcludedImportTypes: ["react"],
            alphabetize: {
              order: "asc",
              caseInsensitive: true,
            },
          },
        ],
        "@typescript-eslint/comma-dangle": "off", // Avoid conflict rule between Eslint and Prettier
        "import/prefer-default-export": "off", // Named export is easier to refactor automatically
        "class-methods-use-this": "off", // _document.tsx use render method without `this` keyword
        "@typescript-eslint/no-unused-vars": "warn",
        "unused-imports/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
        "import/no-named-as-default": "off",
        "no-restricted-exports": "off",
      },
    },
  ],
};
