module.exports = {
    root: true,

    env: {
        es2020: true,
        es6: false,
    },

    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {},
    },

    extends: [
        "airbnb-base",
        "prettier", // disables eslint-rules that conflic with prettier.
    ],

    plugins: [
        "prettier", // runs the prettier and eslint on the same step.
    ],

    rules: {
        // original: "error"
        "prettier/prettier": "warn",
    },
};
