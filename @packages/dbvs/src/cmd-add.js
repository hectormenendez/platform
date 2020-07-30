const Util = require("./util");
const { COMMITS_SUFFIX, COMMITS_PREFIX, COMMITS_PATH } = require("./config");

module.exports = {
    help: "Creates a new migration file.",
    params: "[name]",
    action(name = false) {
        const base = [
            COMMITS_PREFIX,
            Util.dateGenerate(),
            name || Util.gitGetBranch(),
            COMMITS_SUFFIX,
        ].join("");
        Util.fileTouch({ base, path: COMMITS_PATH, log: `Created blank: ${base}` });
    },
};
