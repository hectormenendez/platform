const Parent = require("../.prettierrc");

module.exports = {
    ...Parent,
    svelteSortOrder: "scripts-markup-styles",
    svelteStrictMode: true,
    svelteAllowShorthand: true,
    svelteBracketNewLine: false,
};
