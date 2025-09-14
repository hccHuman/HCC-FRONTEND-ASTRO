const tsPlugin = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const astroPlugin = require('eslint-plugin-astro');

module.exports = [
  {
    files: ['src/**/*.{js,ts}'], // solo JS/TS en src
    ignores: ['node_modules', '.astro/**/*', '**/*.d.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      import: require('eslint-plugin-import'),
    },
    rules: {
      // 🚫 Errores básicos de JavaScript
      'no-undef': 'error', // Variables usadas pero no declaradas
      'no-unused-vars': [
        'warn',
        { args: 'after-used', ignoreRestSiblings: true },
      ], // Variables declaradas pero no usadas
      'no-redeclare': 'error', // Evita redeclarar variables
      'no-shadow': 'error', // Evita que una variable local tenga el mismo nombre que una externa
      'no-console': 'warn', // Aviso sobre console.log
      'no-debugger': 'error', // No dejar debugger en producción
      'no-duplicate-imports': 'error', // Evita imports duplicados

      // 💅 Estilo de código
      semi: ['error', 'always'], // Siempre punto y coma
      quotes: ['error', 'double', { avoidEscape: true }], // Comillas dobles por defecto
      'quote-props': ['error', 'as-needed'], // Solo poner comillas en props cuando sea necesario
      indent: ['error', 2, { SwitchCase: 1 }], // Indentación de 2 espacios
      'comma-dangle': ['error', 'always-multiline'], // Comas finales en multiline
      'space-before-function-paren': ['error', 'never'], // No espacio antes del paréntesis de función
      'key-spacing': ['error', { beforeColon: false, afterColon: true }], // Espacios después de :
      'object-curly-spacing': ['error', 'always'], // Espacios en objetos { key: value }

      // 🔄 Buenas prácticas
      eqeqeq: ['error', 'always'], // Usar === en vez de ==
      curly: ['error', 'all'], // Siempre usar llaves en if/else
      'no-multi-assign': 'error', // No asignaciones múltiples en una línea
      'consistent-return': 'error', // Funciones deben retornar consistentemente
      'no-implicit-globals': 'error', // Evita variables globales implícitas
      'no-empty-function': 'warn', // Funciones vacías
      'no-param-reassign': 'error', // No reasignar parámetros de función
      'no-new': 'error', // Evitar new sin asignación
      'no-var': 'error', // Solo usar let o const
      'prefer-const': 'error', // Preferir const si no se reasigna
      'prefer-arrow-callback': 'error', // Usar arrow functions en callbacks

      // 🛠️ ES6+ / TypeScript
      '@typescript-eslint/no-explicit-any': 'warn', // Evitar "any" en TS
      '@typescript-eslint/explicit-function-return-type': 'off', // Opcional: forzar return type
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-non-null-assertion': 'warn', // Evitar ! innecesario
      '@typescript-eslint/consistent-type-imports': 'error', // Imports de tipos consistentes

      // 🧹 Limpieza de código
      'no-trailing-spaces': 'error', // No dejar espacios al final de línea
      'eol-last': ['error', 'always'], // Siempre una línea final
      'newline-before-return': 'error', // Línea antes de return
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' },
      ],

      // 🧩 Control de imports
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'import/no-duplicates': 'error',

      // 💡 Extras útiles para proyecto moderno
      'no-async-promise-executor': 'error',
      'no-await-in-loop': 'warn',
      'no-return-await': 'error',
      'prefer-template': 'error',
      'template-curly-spacing': 'error',
      'no-unneeded-ternary': 'error',
      'no-lonely-if': 'error',
    },
  },
  {
    files: ['src/**/*.astro'], // solo Astro en src
    ignores: ['node_modules', '.astro/**/*', 'src/**/*.css'],
    languageOptions: {
      parser: require('astro-eslint-parser'),
    },
    plugins: {
      astro: astroPlugin,
    },
    rules: {},
  },
];
