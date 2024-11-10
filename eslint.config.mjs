import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import { fixupConfigRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();
const nextlint = [...fixupConfigRules(compat.extends('plugin:@next/next/core-web-vitals'))];

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}', 'node_modules/', '.git/', 'dist/', '.DS_Store/', '.next/', '**/*.scss'],
  },

  { languageOptions: { globals: { ...globals.browser, ...globals.node, React: 'readonly' } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...nextlint,
  {
    rules: {
      'no-console': 'error',
      'no-debugger': 'error',
      'no-undef': 'error',
    },
  },
  eslintPluginPrettierRecommended,
];
