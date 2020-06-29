const { NODE_ENV } = process.env;

module.exports = {
    root: true,

    env: {
        es2020: true,
    },

    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {},
    },

    extends: [
        "prettier", // disables eslint-rules that conflic with prettier.
    ],

    plugins: [
        "prettier", // runs the prettier and eslint on the same step.
    ],

    rules: {
        // original: "error"
        "prettier/prettier": "warn",

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
