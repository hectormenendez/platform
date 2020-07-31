const PATH = require("path");
const Commit = require("./util/commit");
const { KEYWORD_UP, COMMITS_PATH } = require("./config");

module.exports = {
    help: "Applies next commit",
    params: "",
    action() {
        const commit = Commit(PATH.join(this.dir, COMMITS_PATH));
        const list = commit.list();
        if (!list || !list.length) {
            throw "There's nothing to commit.";
        }
        const status = commit.status();
        if (!status) {
            // no current commit, apply first one of list.
            return commit.run(KEYWORD_UP, list.shift());
        }
        // if no .commit, create empty one.
        // run the first available commit
        // update .commit
        return undefined;
    },
};
