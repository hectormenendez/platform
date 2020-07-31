require("dotenv").config();

const { USER, PASSWORD, DB: DATABASE, PORT, HOST } = Object.entries(process.env)
    .filter(([key]) => key.indexOf("POSTGRES_") === 0)
    .reduce(
        (acc, [key, val]) => ({
            ...acc,
            [key.replace("POSTGRES_", "")]: val,
        }),
        { USER: null, PASSWORD: null, DB: null, PORT: null, HOST: null },
    );

const ROOT = __dirname;

module.exports = {
    ROOT,
    CMD_PATH: ROOT,
    CMD_PREFIX: "cmd-",
    CMD_SUFFIX: ".js",
    COMMITS_PATH: "commits",
    COMMITS_PREFIX: "",
    COMMITS_SUFFIX: ".commit.js",
    COMMITS_DOTFILE: ".status",
    KEYWORD_UP: "up",
    KEYWORD_DOWN: "down",
    DB: { USER, PASSWORD, DATABASE, PORT, HOST },
    AGGREGATOR_PUSH: "push",
    AGGREGATOR_QUEUE: "queue",
};
