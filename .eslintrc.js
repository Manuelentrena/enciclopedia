const RULES = {
  OFF: 'off',
  ERROR: 'error',
  WARN: 'warn',
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': RULES.OFF,
    'react/prop-types': RULES.OFF,
    'react/button-has-type': RULES.OFF,
    'import/no-unresolved': RULES.OFF,
    'jsx-a11y/click-events-have-key-events': RULES.OFF,
    'jsx-a11y/no-static-element-interactions': RULES.OFF,
    'import/no-extraneous-dependencies': RULES.OFF,
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    'react/jsx-props-no-spreading': RULES.OFF,
    'import/prefer-default-export': RULES.OFF,
    'no-plusplus': RULES.OFF,
    'no-param-reassign': RULES.OFF,
    'no-console': ['error', { allow: ['error', 'log'] }],
  },
};
