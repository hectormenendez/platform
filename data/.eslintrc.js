module.exports = {
    extends: ["../.eslintrc.js", "../.etc/eslint/config-node.js"],

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
