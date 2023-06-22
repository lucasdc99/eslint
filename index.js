module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "next",
    "airbnb",
    "airbnb-typescript",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@typescript-eslint/strict",
    "turbo",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "import"],
  settings: {
    next: {
      rootDir: ["apps/*/", "packages/*/"],
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: ["apps/*/tsconfig.json", "packages/*/tsconfig.json"],
      },
    },
  },
  rules: {
    "import/prefer-default-export": 0,
    "@next/next/no-html-link-for-pages": 0,
    "@typescript-eslint/naming-convention": [
      1,
      {
        selector: "variableLike",
        format: ["camelCase"],
      },
      {
        selector: "parameter",
        format: ["camelCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "parameter",
        types: ["function"],
        format: ["PascalCase", "camelCase"],
      },
      { selector: "function", format: ["camelCase", "PascalCase"] },
      {
        selector: "variable",
        types: ["boolean"],
        format: ["PascalCase"],
        prefix: ["is", "should", "has", "can", "did", "will"],
      },
      {
        selector: "variable",
        modifiers: ["global"],
        types: ["boolean", "number", "string"],
        format: ["UPPER_CASE"],
        filter: {
          regex: "^(revalidate|dynamic)$",
          match: false,
        },
      },
      {
        selector: "typeAlias",
        format: ["PascalCase"],
        prefix: ["T"],
      },
      {
        selector: "interface",
        format: ["PascalCase"],
        prefix: ["I"],
      },
    ],
    "react/destructuring-assignment": 0,
    "react/react-in-jsx-scope": 0,
    "@typescript-eslint/no-misused-promises": [
      2,
      {
        checksVoidReturn: false,
      },
    ],
    "react/require-default-props": 0,
    "react/jsx-props-no-spreading": [
      2,
      {
        exceptions: ["input", "textarea", "InputBase", "FormProvider", "RadioGroup.Item"],
      },
    ],
    "no-console": [1, { allow: ["error"] }],
    "no-void": [2, { allowAsStatement: true }],
  },
  ignorePatterns: ["**/*.js", "**/*.json", "node_modules", "public", "styles", ".next", "coverage", "dist", ".turbo"],
};
