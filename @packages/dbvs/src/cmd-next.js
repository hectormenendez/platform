const Commit = require("./util/commit");
const { KEYWORD_UP } = require("./config");

module.exports = {
    help: "Applies next commit",
    params: "",
    action() {
        const list = Commit.list();
        if (!list || !list.length) {
            throw "There's nothing to commit.";
        }
        const status = Commit.status();
        if (!status) {
            // no current commit, apply first one of list.
            return Commit.run(KEYWORD_UP, list.shift());
        }
        // if no .commit, create empty one.
        // run the first available commit
        // update .commit
        return undefined;
    },
};
