module.exports = {
    root: true,
    extends: ["./index.js"],
    globals: {
        process: "readonly",
        module: "writable",
    },
    rules: {
        "import/unambiguous": 0,
    },
};
