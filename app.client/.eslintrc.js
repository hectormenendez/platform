module.exports = {
    extends: ["../.eslintrc.js"],

    ignorePatterns: [
        "./android/**/*", // Android project
        "./ios/**/*", // iOS project
    ],

    overrides: [
        {
            files: ["./.*rc.js", "./*.config.js"],
            extends: ["../.etc/eslint/config-node.js"],
        },
        {
            files: ["./index.js", "src/**/*.js"],
            extends: ["../.etc/eslint/config-react-native.js"],
        },
    ],
};
