var SvelteCompiler = require("svelte/compiler");

module.exports = {
    root: true,

    env: {
        browser: true,
        node: false,
    },

    extends: ["@packages/base"],

    plugins: ["svelte3"],

    settings: {
        "svelte3/compiler": SvelteCompiler,
    },

    overrides: [
        // Svelte specific
        {
            files: ["*.svelte"],
            processor: "svelte3/svelte3",
            rules: {
                // https://github.com/sveltejs/eslint-plugin-svelte3/blob/master/OTHER_PLUGINS.md
                "prettier/prettier": 0,
                "import/first": 0,
                "import/no-duplicates": 0,
                "import/no-mutable-exports": 0,
                "import/prefer-default-export": 0,
                "import/exports-last": 0,
            },
        },
    ],
};
