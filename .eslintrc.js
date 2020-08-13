module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
  },
  parserOptions: {
    parser: `babel-eslint`,
  },
  extends: [
    `plugin:vue/vue3-recommended`,
    `@avalanche/eslint-config`,
  ],
  rules: {
    // Workaround for https://github.com/babel/babel-eslint/issues/799
    'template-curly-spacing': [
      `off`,
    ],
    'no-console': process.env.NODE_ENV === `production` ? `error` : `warn`,
    'no-debugger': process.env.NODE_ENV === `production` ? `error` : `warn`,
    'vue/component-name-in-template-casing': [`error`,
      `PascalCase`,
    ],
    'vue/html-closing-bracket-spacing': [`error`, {
      startTag: `never`,
      endTag: `never`,
      selfClosingTag: `never`,
    }],
  },
};
