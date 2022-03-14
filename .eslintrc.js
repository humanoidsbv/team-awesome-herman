module.exports = {
  extends: [
    "@humanoids/eslint-config",
    "plugin:cypress/recommended",
    "plugin:storybook/recommended",
    "plugin:react/jsx-runtime",
  ],
  env: {
    jest: true,
  },
};
