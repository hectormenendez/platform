module.exports = {
    extends: ["../.eslintrc.js"],

    env: {
        browser: true,
    },

    plugins: ["svelte3"],

    overrides: [
        {
            files: ["*.svelte"],
            processor: "svelte3/svelte3",
            settings: {
                // eslint-disable-next-line global-require,import/no-extraneous-dependencies
                "svelte3/compiler": require("svelte/compiler"),
            },
            rules: {
                // https://github.com/sveltejs/eslint-plugin-svelte3/blob/master/OTHER_PLUGINS.md
                "prettier/prettier": 0,
                "import/first": 0,
                "import/no-duplicates": 0,
                "import/no-mutable-exports": 0,
                "import/prefer-default-export": 0,
            },
        },
    ],
};
