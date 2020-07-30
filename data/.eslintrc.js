module.exports = {
    extends: ["@packages/base", "@packages/node"],

    ignorePatterns: ["./db"],

    overrides: [
        {
            files: "./dbvs/_seeds/_root.js",
            rules: {
                "node/exports-style": ["error", "exports"],
            },
        },
    ],
};
