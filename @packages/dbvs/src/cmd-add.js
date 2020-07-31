const PATH = require("path");
const Util = require("./util");
const { COMMITS_SUFFIX, COMMITS_PREFIX, COMMITS_PATH } = require("./config");

module.exports = {
    help: "Creates a new migration file.",
    params: "[name]",
    action(name = false) {
        const path = PATH.join(this.dir, COMMITS_PATH);
        const base = [
            COMMITS_PREFIX,
            Util.dateGenerate(),
            name || Util.gitGetBranch(),
            COMMITS_SUFFIX,
        ].join("");
        Util.fileTouch({ base, path, log: `Created blank: ${base}` });
    },
};
