// rules
const lintTS = {
  plugins: ['@typescript-eslint'],
  extends: ['plugin:@typescript-eslint/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    warnOnUnsupportedTypeScriptVersion: false, // suppress the typescript version difference
  },
  // typescript-eslint https://github.com/typescript-eslint/typescript-eslint/tree/d0d71862efd7e079694fa9513ea983cc908ec6f6/packages/eslint-plugin
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/prefer-ts-expect-error': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-var-requires': 'off', // turning off because we do not care if we import using es6 or common js... stupid lint
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { variables: true }],
    'react/display-name': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: ['interface'],
        format: ['PascalCase'],
        prefix: ['I'],
      },
      {
        selector: ['enum'],
        format: ['PascalCase'],
        prefix: ['E'],
      },
    ],
  },
};

const lintReact = {
  plugins: ['react'],
  extends: ['plugin:react/recommended'],
  // React Rules: https://www.npmjs.com/package/eslint-plugin-react
  rules: {
    'react/react-in-jsx-scope': 'off', // from react: Prevent missing React when using JSX -- turned off for next.js
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }], // from react: Restrict file extensions that may contain JSX
    'react/prop-types': 'off', // from react: Prevent missing props validation in a React component definition
    'react/jsx-props-no-spreading': ['error', { custom: 'ignore' }], // from react: Prevent JSX prop spreading
    'react/no-unescaped-entities': 'warn', // Turning on to catch possible mistakes
  },
  settings: {
    pragma: 'React',
    version: 'detect',
  },
};

module.exports = {
  root: true,
  parserOptions: lintTS.parserOptions,
  parser: '@typescript-eslint/parser',
  plugins: [...lintTS.plugins, ...lintReact.plugins],
  extends: ['eslint:recommended', ...lintTS.extends, ...lintReact.extends],
  rules: {
    // eslint rules: https://eslint.org/docs/rules/
    'prefer-const': 'warn', // from eslint: require `const` declarations for variables that are never reassigned after declared
    // needed because of https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md#how-to-use & https://stackoverflow.com/questions/63818415/react-was-used-before-it-was-defined
    'no-use-before-define': 'off', // from eslint: disallow the use of variables before they are defined
    ...lintTS.rules,
    ...lintReact.rules,
  },
  settings: {
    react: lintReact.settings,
    'import/resolver': {
      'babel-module': {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['src'],
      },
    },
  },
};
