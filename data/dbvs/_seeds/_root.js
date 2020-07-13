/* eslint-disable node/global-require */

const PATH = require("path");
const { promises: FS } = require("fs");

const { EXT, DB_ORDER, DB_FIELD } = require("../../constants");

const { ID } = DB_FIELD.COMMON;
/**
 * @param {import("knex")} knex
 */
exports.seed = function (knex) {
    return DB_ORDER.reduce(
        (prevPromise, tableName) =>
            prevPromise.then(async () => {
                // Get existent rows
                const existent = await knex(tableName).select();

                // Delete all rows for every table.
                await knex(tableName).del();

                existent.forEach((row) => {
                    const val = { [ID]: row[ID] };
                    process.stdout.write(
                        `[${tableName}:delete] ${JSON.stringify(val)}\n`,
                    );
                });

                // Insert all rows described in either public or local seeds
                const inserted = await [EXT.SEED, EXT.SEED_LOCAL].reduce(
                    (prevExtPromise, ext) =>
                        prevExtPromise.then(async (rows) => {
                            const path = PATH.join(__dirname, [tableName, ext].join(""));
                            const stat = await FS.stat(path);
                            if (!stat.isFile()) return false;
                            return rows.concat(
                                await knex(tableName).insert(require(path), "*"),
                            );
                        }),
                    Promise.resolve([]),
                );
                if (!inserted) return;
                inserted.forEach((row) =>
                    process.stdout.write(
                        `[${tableName}:insert] ${JSON.stringify(row)}\n`,
                    ),
                );
            }),
        Promise.resolve(),
    );
};
