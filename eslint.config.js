import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import typescriptEslintParser from '@typescript-eslint/parser';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import reactEslintPlugin from 'eslint-plugin-react';
import reactHooksEslintPlugin from 'eslint-plugin-react-hooks';
import globals from 'globals';

/**
 * eslint rule 추가 시
 * @see https://eslint.org/docs/latest/rules/
 *
 * 레퍼런스
 * @see https://gomban.tistory.com/32
 */
export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      react: reactEslintPlugin,
    },
    rules: {
      ...reactEslintPlugin.configs['jsx-runtime'].rules,
    },
  },

  {
    plugins: {
      'react-hooks': reactHooksEslintPlugin,
    },
    rules: {
      'react-hooks/exhaustive-deps': 'off',
    },
    settings: {
      react: {
        version: 'detect', // You can add this if you get a warning about the React version when you lint
      },
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        /**
         * Custom utility
         */
        PropType: 'readonly',

        /**
         * Custom utility
         */
        ArrayType: 'readonly',

        /**
         * Custom Utility
         */
        ValueOf: 'readonly',

        /**
         * env
         */
        process: 'readonly',
      },
      parser: {
        ...typescriptEslintParser,
      },
      parserOptions: {
        project: 'packages/*/tsconfig.json',
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      ...typescriptEslintPlugin.configs.languageOptions,
    },
    rules: {
      'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
      'no-undef': 'error',
      'comma-dangle': 'off',
      quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
      semi: 'warn',
      ...typescriptEslintPlugin.configs.rules,
    },
  },
);
