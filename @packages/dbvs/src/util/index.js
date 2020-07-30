const FS = require("fs");
const PATH = require("path");

const { ROOT } = require("../config");

module.exports = {
    /**
     * Determines if string contains either a prefix or a suffix
     * @param {string} string
     * @param {Object} options
     * @param {string} options.prefix
     * @param {string} options.suffix
     * @returns {boolean}
     */
    stringContains(string, { prefix = "", suffix = "" }) {
        let valid = true;
        if (prefix) {
            valid = valid && string.indexOf(prefix) === 0;
        }
        if (suffix) {
            valid = valid && string.indexOf(suffix) === string.length - suffix.length;
        }
        return valid;
    },

    /**
     * Generate a sort-ready file that can be used as identifiert.
     * @param {Date} date
     */
    dateGenerate(date = new Date()) {
        return [
            date.getUTCFullYear().toString().slice(-2),
            date.getUTCMonth() + 1,
            date.getUTCDate(),
            date.getUTCMinutes(),
            date.getUTCSeconds(),
        ]
            .map((n) => n.toString().padStart(2, "0"))
            .join("");
    },

    /** Gets the current branch on git. */
    gitGetBranch() {
        let cur = __dirname;
        do {
            cur = PATH.resolve(cur, "..");
            if (cur === PATH.sep) {
                throw "Could not find a git repository.";
            }
        } while (!FS.existsSync(PATH.join(cur, ".git")));
        const cont = FS.readFileSync(PATH.join(cur, ".git", "HEAD"), {
            encoding: "utf8",
        });
        return cont.slice(cont.lastIndexOf("/") + 1).trim();
    },

    /**
     * Creates an empty file.
     * @param {Object} options
     * @param {string} options.path - The directory where to touch the file.
     * @param {string} options.base - The filename
     * @param {string?} options.log - An optional message to send after creating the file.
     */
    fileTouch({ path = ROOT, base, log = null }) {
        FS.closeSync(FS.openSync(PATH.join(path, base), "w"));
        if (log) process.stdout.write(`${log}\n`);
    },
};
