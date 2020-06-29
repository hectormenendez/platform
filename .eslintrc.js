module.exports = {
    root: true,

    env: {
        es2020: true,
        es6: false,
    },

    parser: "babel-eslint",
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {},
    },

    extends: ["airbnb-base", "prettier"],

    rules: {},
};
