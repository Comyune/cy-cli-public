module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
  ],
  plugins: [
    'node',
  ],
  rules: {
    'capitalized-comments': 0,
    'comma-dangle': ['error', 'always-multiline'],
    'default-case': 0,
    'no-multi-spaces': 0,
    'no-console': 0,
    'node/shebang': 0,
    curly: 0,
    indent: ['error', 2, {SwitchCase: 0, MemberExpression: 0}],
    quotes: ['error', 'single', {avoidEscape: true}],
    semi: ['error', 'never'],
  },
  globals: {
    describe: true,
    it: true,
    expect: true,
    beforeEach: true,
    afterEach: true,
    jest: true,
    fixtureFilePath: true,
    fixtureFileReadAsync: true,
    timeDifferenceFromNow: true,
  },
}