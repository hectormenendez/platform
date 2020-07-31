const FS = require("fs");
const PATH = require("path");

const Util = require(".");
const Aggregator = require("./sql-aggregator");

const { COMMITS_SUFFIX, COMMITS_PREFIX, COMMITS_DOTFILE } = require("../config");

module.exports = (pathCommits) => ({
    /** Given a commit filename, return its identifier. */
    id(commit) {
        return String(commit).replace(COMMITS_PREFIX, "").replace(COMMITS_SUFFIX, "");
    },

    /** Returns the list of available commits sorted by ID (independen of suffix/prefix) */
    list() {
        return FS.readdirSync(pathCommits)
            .filter((name) =>
                Util.stringContains(name, {
                    suffix: COMMITS_SUFFIX,
                    prefix: COMMITS_PREFIX,
                }),
            )
            .map((name) => this.id(name))
            .sort()
            .map((id) => [COMMITS_PREFIX, id, COMMITS_SUFFIX].join(""));
    },

    /** Obtains commit information from dotfile, or creates it if not available. */
    status() {
        const path = PATH.join(pathCommits, COMMITS_DOTFILE);
        if (!FS.existsSync(path)) {
            Util.fileTouch({
                path: pathCommits,
                base: COMMITS_DOTFILE,
                log: "Created dotfile",
            });
        }
        return FS.readFileSync(path, "utf8").trim() || null;
    },

    get(commit) {
        if (!commit || this.list().indexOf(commit) === -1) {
            throw `Expecting a valid commit, got: ${commit}`;
        }
        // ok, the commit exists, load it.
        let imported = null;
        try {
            // eslint-disable-next-line node/global-require
            imported = require(PATH.join(pathCommits, commit));
        } catch (err) {
            process.stderr.write([`\nCould not load commit <${commit}>.\n`, err.stack].join("\n"));
            process.exit(1);
        }
        return imported;
    },

    run(direction, commit) {
        const imported = this.get(commit);
        if (!imported[direction]) {
            throw `Could not find the "${direction}" method.`;
        }
        const statements = new Aggregator(imported[direction]);
        // eslint-disable-next-line no-console
        console.log(statements.join("\n"));
    },
});
