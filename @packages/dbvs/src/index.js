#!/usr/bin/env node

const FS = require("fs");
const PATH = require("path");

const { program: Program } = require("commander");

const { version: VERSION } = require("../package.json");
const { CMD_PATH, CMD_PREFIX, CMD_SUFFIX } = require("./config");
const { stringContains } = require("./util");

FS.readdirSync(CMD_PATH)
    .filter((name) => stringContains(name, { suffix: CMD_SUFFIX, prefix: CMD_PREFIX }))
    .forEach((name) => {
        const command = name.replace(CMD_PREFIX, "").replace(CMD_SUFFIX, "");
        // eslint-disable-next-line node/global-require
        const { params, help, action } = require(PATH.join(CMD_PATH, name));
        Program.command(`${command} ${params}`).description(help).action(action);
    });

Program.version(VERSION);
Program.parse(process.argv);
