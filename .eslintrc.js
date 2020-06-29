const { NODE_ENV } = process.env;

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

        // Hoisting is a very useful feature of Javascript for readibility, keep it for functions.
        // original: not-present (error)
        "no-use-before-define": [
            "error",
            {
                functions: false,
                classes: false,
            },
        ],

        // Conditional from the environment
        ...(NODE_ENV !== "production"
            ? {
                  "no-console": "warn",
                  "no-debugger": "warn",
                  "no-alert": "warn",
              }
            : {
                  "no-console": "error",
                  "no-debugger": "error",
                  "no-alert": "error",
              }),
    },
};
