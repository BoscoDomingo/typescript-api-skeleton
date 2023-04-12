module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
    {
      files: ['test/**'],
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
      rules: { 'jest/prefer-expect-assertions': 'off' },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-module-boundary-types': [
      'warn',
      { allowArgumentsExplicitlyTypedAsAny: true },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-inferrable-types': 'warn',
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
    '@typescript-eslint/consistent-generic-constructors': 'error',
    '@typescript-eslint/member-ordering': [
      'warn',
      {
        default: [
          // Index signature
          'signature',
          'call-signature',

          // Fields
          'public-static-field',
          'protected-static-field',
          'private-static-field',
          '#private-static-field',

          'public-decorated-field',
          'protected-decorated-field',
          'private-decorated-field',

          'public-instance-field',
          'protected-instance-field',
          'private-instance-field',
          '#private-instance-field',

          'public-abstract-field',
          'protected-abstract-field',

          'public-field',
          'protected-field',
          'private-field',
          '#private-field',

          'static-field',
          'instance-field',
          'abstract-field',

          'decorated-field',

          'field',

          // Static initialization
          'static-initialization',

          // Constructors
          'public-constructor',
          'protected-constructor',
          'private-constructor',

          'constructor',

          // Getters
          'public-static-get',
          'protected-static-get',
          'private-static-get',
          '#private-static-get',

          'public-decorated-get',
          'protected-decorated-get',
          'private-decorated-get',

          'public-instance-get',
          'protected-instance-get',
          'private-instance-get',
          '#private-instance-get',

          'public-abstract-get',
          'protected-abstract-get',

          'public-get',
          'protected-get',
          'private-get',
          '#private-get',

          'static-get',
          'instance-get',
          'abstract-get',

          'decorated-get',

          'get',

          // Setters
          'public-static-set',
          'protected-static-set',
          'private-static-set',
          '#private-static-set',

          'public-decorated-set',
          'protected-decorated-set',
          'private-decorated-set',

          'public-instance-set',
          'protected-instance-set',
          'private-instance-set',
          '#private-instance-set',

          'public-abstract-set',
          'protected-abstract-set',

          'public-set',
          'protected-set',
          'private-set',
          '#private-set',

          'static-set',
          'instance-set',
          'abstract-set',

          'decorated-set',

          'set',

          // Methods
          'public-static-method',
          'protected-static-method',
          'private-static-method',
          '#private-static-method',

          'public-decorated-method',
          'protected-decorated-method',
          'private-decorated-method',

          'public-instance-method',
          'protected-instance-method',
          'private-instance-method',
          '#private-instance-method',

          'public-abstract-method',
          'protected-abstract-method',

          'public-method',
          'protected-method',
          'private-method',
          '#private-method',

          'static-method',
          'instance-method',
          'abstract-method',

          'decorated-method',

          'method',
        ],
      },
    ],
    '@typescript-eslint/no-confusing-void-expression': 'warn',
    '@typescript-eslint/no-duplicate-enum-values': 'error',
    '@typescript-eslint/no-duplicate-type-constituents': 'error',
    '@typescript-eslint/no-meaningless-void-operator': 'error',
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
    '@typescript-eslint/no-redundant-type-constituents': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'warn',
    '@typescript-eslint/no-extra-non-null-assertion': 'warn',
    '@typescript-eslint/no-unsafe-declaration-merging': 'error',
    '@typescript-eslint/no-unsafe-enum-comparison': 'warn',
    '@typescript-eslint/no-useless-empty-export': 'error',
    '@typescript-eslint/non-nullable-type-assertion-style': 'error',
    '@typescript-eslint/prefer-for-of': 'warn',
    '@typescript-eslint/prefer-function-type': 'warn',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-literal-enum-member': 'warn',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/prefer-optional-chain': 'warn',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/unified-signatures': 'error',
    '@typescript-eslint/sort-type-constituents': 'error',
    '@typescript-eslint/switch-exhaustiveness-check': 'warn',
    'no-console': 'warn',
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': 'warn',
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': 'error',
    'no-await-in-loop': 'warn',
    'no-constructor-return': 'error',
    'import/order': [
      1,
      {
        alphabetize: { order: 'asc' },
      },
    ],
    'import/newline-after-import': ['error', { count: 1 }],
  },
};
