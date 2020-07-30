module.exports = {
    root: true,

    overrides: [
        // Node specific
        {
            files: [
                ".*rc.js", // root conf files
            ],
            extends: ["./@packages/eslint-config-node/index.js"],
        },
    ],
};
