import eslint from 'eslint';
const { Config } = eslint;

import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
// import typescriptPrettier from 'eslint-plugin-prettier';

/** @type {Config[]} */
const config = [
  {
    files: ['**/*.ts'], // Apply rules to TypeScript files
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json'
      }
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      prettier: require('eslint-plugin-prettier')
    },
    rules: {
      quotes: ['error', 'single'], // Enforce single quotes
      semi: ['error', 'always'], // Enforce semicolons
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
      ], // Ignore variables/arguments starting with _
      '@typescript-eslint/no-explicit-any': 'warn', // Warn on `any` type usage
      'prettier/prettier': 'error' // Report Prettier issues as ESLint errors
    },
    extends: [
      'plugin:@typescript-eslint/recommended', // TypeScript-specific recommended rules
      'plugin:prettier/recommended' // Prettier integration
    ]
  }
];

export default config;
