const { NODE_ENV } = process.env;
const PRODUCTION = NODE_ENV === "production";

module.exports = {
    root: true,

    env: {
        browser: false,
        node: true,
    },

    extends: ["@packages/base", "plugin:node/recommended"],

    settings: {
        node: {
            allowModules: undefined,
            resovePaths: undefined,
            tryExtensions: undefined,
        },
        "import/resolver": {
            node: {
                extensions: [".mjs", ".js", ".json"],
            },
        },
    },

    rules: {
        // require return statements after callbacks
        "node/callback-return": "error",

        // enforces the export style.
        "node/exports-style": ["error", "module.exports", { allowBatchAssign: true }],

        // enforces the style of file extensions in import/export declarations.
        "node/file-extension-in-import": ["error", "never"],

        // require all requires be top-level
        "node/global-require": "error",

        // enforces error handling in callbacks
        // original: "off"
        "node/handle-callback-err": "error",

        // ensure Node.js-style error-first callback pattern is followed
        // original: "off"
        "node/no-callback-literal": "error",

        // disallow deprecated APIs
        // NOTE: depends upon package.json "engines" setting.
        "node/no-deprecated-api": "error",

        // disallow the assignment to exports
        "node/no-exports-assign": "error",

        // disallow import declarations which import extraneous modules
        "node/no-extraneous-import": "error",

        // disallow require() expressions which import extraneous modules
        "node/no-extraneous-require": "error",

        // disallow import declarations which import non-existence modules
        "node/no-missing-import": "error",

        // disallow require() expressions which import non-existence modules
        "node/no-missing-require": "error",

        // disallow require calls to be mixed with regular variable declarations
        // original: "off"
        "node/no-mixed-requires": ["error", { grouping: true, allowCall: false }],

        // disallow new operators with calls to require
        // original: "off"
        "node/no-new-require": "error",

        // disallow string concatenation with __dirname and __filename
        // original: "off"
        "node/no-path-concat": "error",

        // disallow the use of process.env
        "node/no-process-env": "off",

        // disallow the use of process.exit()
        // original: "off"
        "no-process-exit": "off",
        "node/no-process-exit": PRODUCTION ? "error" : "warn",

        // disallow specified modules when loaded by import declarations
        "node/no-restricted-import": "off",

        // disallow specified modules when loaded by require
        "node/no-restricted-require": "off",

        // disallow synchronous methods
        "node/no-sync": "off",

        // disallow bin files that npm ignores
        "node/no-unpublished-bin": "off",

        // disallow import declarations which import private modules
        "node/no-unpublished-import": "off",

        // disallow require() expressions which import private modules
        "node/no-unpublished-require": "off",

        // disallow unsupported ECMAScript built-ins on the specified version
        // NOTE: depends upon package.json "engines" setting.
        "node/no-unsupported-features/es-builtins": "error",

        // disallow unsupported ECMAScript syntax on the specified version
        // NOTE: depends upon package.json "engines" setting.
        "node/no-unsupported-features/es-syntax": "error",

        // disallow unsupported Node.js built-in APIs on the specified version
        // NOTE: depends upon package.json "engines" setting.
        "node/no-unsupported-features/node-builtins": "off",

        // enforce either Buffer or require("buffer").Buffer
        // original: "off"
        "node/prefer-global/buffer": ["error", "always"],

        // enforce either console or require("console")
        // original: "off"
        "node/prefer-global/console": ["error", "always"],

        // enforce either process or require("process")
        // original: "off"
        "node/prefer-global/process": ["error", "always"],

        // enforce either TextDecoder or require("util").TextDecoder
        // original: "off"
        "node/prefer-global/text-decoder": ["error", "never"],

        // enforce either TextEncoder or require("util").TextEncoder
        // original: "off"
        "node/prefer-global/text-encoder": ["error", "never"],

        // enforce either URL or require("url").URL
        // original: "off"
        "node/prefer-global/url": ["error", "never"],

        // enforce either URLSearchParams or require("url").URLSearchParams
        "node/prefer-global/url-search-params": ["error", "never"],

        // enforce require("dns").promises
        // original: "off"
        "node/prefer-promises/dns": "error",

        // enforce require("fs").promises
        // original: "off"
        "node/prefer-promises/fs": "error",

        // make process.exit() expressions the same code path as throw
        "node/process-exit-as-throw": "error",

        // suggest correct usage of shebang
        "node/shebang": "error",

        // ----------------------------------------------------------------------- AirBnb: importing

        // Forbid the use of extraneous packages
        // paths are treated both as absolute paths, and relative to process.cwd()
        "import/no-extraneous-dependencies": [
            "error",
            {
                devDependencies: true,
                optionalDependencies: true,
                peerDependencies: true,
            },
        ],

        // No Node.js builtin modules
        "import/no-nodejs-modules": "off",

        // Forbid require() calls with expressions
        "import/no-dynamic-require": "off",
    },
};
