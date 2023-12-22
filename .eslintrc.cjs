/* eslint-env node */
module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      processor: "@graphql-eslint/graphql",
      parser: "@typescript-eslint/parser",
      extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
      env: {
        es6: true,
      },
    },
    {
      files: ["*.graphql"],
      parser: "@graphql-eslint/eslint-plugin",
      plugins: ["@graphql-eslint"],
      rules: {
        "@graphql-eslint/no-anonymous-operations": "error",
        "@graphql-eslint/naming-convention": [
          "error",
          {
            OperationDefinition: {
              style: "PascalCase",
              forbiddenPrefixes: ["Query", "Mutation", "Subscription", "Get"],
              forbiddenSuffixes: ["Query", "Mutation", "Subscription"],
            },
          },
        ],
      },
    },
  ],
};
