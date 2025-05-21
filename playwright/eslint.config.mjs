import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  { ignores: ([
      "/playwright-report/**/*",
      "/test-results/**/*",
      "/node_modules/**/*",
      "package-lock.json",
      "package.json",
      "tsconfig.json",
      "eslint.config.mjs",
      "playwright/utils/templateSpec.ts",
      "playwright/utils/templateSpec.ts",
      "playwright/lib/datafactory/mockOrderConfirmation.ts"
  ]),
    files: ['**/*.ts'],

    languageOptions: {
      parser: tsparser,
      sourceType: 'module',
      parserOptions: {
        project: './tsconfig.json', // Path to your tsconfig.json
        tsconfigRootDir: process.cwd(),
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },

    plugins: {
      '@typescript-eslint': tseslint,
      prettier: prettierPlugin,

    },

    rules: {
      ...tseslint.configs.recommended.rules,
      ...prettierConfig.rules,
      '@typescript-eslint/no-unused-vars': 'warn',
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/await-thenable": "error",
      'no-console': 'warn',
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'prettier/prettier': 'error',
      'max-len': [0, 120, 2, { ignoreUrls: true }]
    },
  },
];
