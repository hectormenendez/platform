const FS = require("fs");
const PATH = require("path");

const Util = require(".");
const Aggregator = require("./sql-aggregator");

const {
    COMMITS_PATH,
    COMMITS_SUFFIX,
    COMMITS_PREFIX,
    COMMITS_DOTFILE,
} = require("../config");

const self = (module.exports = {
    /** Given a commit filename, return its identifier. */
    id(commit) {
        return String(commit).replace(COMMITS_PREFIX, "").replace(COMMITS_SUFFIX, "");
    },

    /** Returns the list of available commits sorted by ID (independen of suffix/prefix) */
    list() {
        return FS.readdirSync(COMMITS_PATH)
            .filter((name) =>
                Util.stringContains(name, {
                    suffix: COMMITS_SUFFIX,
                    prefix: COMMITS_PREFIX,
                }),
            )
            .map((name) => self.id(name))
            .sort()
            .map((id) => [COMMITS_PREFIX, id, COMMITS_SUFFIX].join(""));
    },

    /** Obtains commit information from dotfile, or creates it if not available. */
    status() {
        const path = PATH.join(COMMITS_PATH, COMMITS_DOTFILE);
        if (!FS.existsSync(path)) {
            Util.fileTouch({
                path: COMMITS_PATH,
                base: COMMITS_DOTFILE,
                log: "Created dotfile",
            });
        }
        return FS.readFileSync(path, "utf8").trim() || null;
    },

    get(commit) {
        if (!commit || self.list().indexOf(commit) === -1) {
            throw `Expecting a valid commit, got: ${commit}`;
        }
        // ok, the commit exists, load it.
        let imported = null;
        try {
            // eslint-disable-next-line node/global-require
            imported = require(PATH.join(COMMITS_PATH, commit));
        } catch (err) {
            process.stderr.write(
                [`\nCould not load commit <${commit}>.\n`, err.stack].join("\n"),
            );
            process.exit(1);
        }
        return imported;
    },

    run(direction, commit) {
        const imported = self.get(commit);
        if (!imported[direction]) {
            throw `Could not find the "${direction}" method.`;
        }
        const statements = new Aggregator(imported[direction]);
        console.log(statements.join("\n"));
    },
});
