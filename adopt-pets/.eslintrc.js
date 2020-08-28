module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production'
      ? 'warn'
      : 'off',
    'no-debugger': process.env.NODE_ENV === 'production'
      ? 'warn'
      : 'off',
    'comma-style': [ 'error', 'last' ],
    'comma-spacing': [ 'error', { before: false, after: true } ],
    'comma-dangle': [ 'error', 'always-multiline' ],
    semi: [ 'error', 'always' ],
    'semi-spacing': [ 'error', { before: false, after: true } ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'object-curly-spacing': [ 'error', 'always', { arraysInObjects: false } ],
    'space-before-function-paren': [ 'error', 'never' ],
    'one-var': [ 'warn', 'never' ],
    quotes: [ 'error', 'single', { avoidEscape: false, allowTemplateLiterals: true } ],
  },
};
