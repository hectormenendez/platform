/* eslint-disable node/global-require */

const PATH = require("path");
const { promises: FS } = require("fs");

const { EXT, DB_ORDER, DB_FIELD } = require("../../constants");

const { ID } = DB_FIELD.COMMON;

// eslint-disable-next-line node/exports-style
exports.seed = function (knex) {
    return DB_ORDER.reduce(
        (prevPromise, { TABLE, SCHEMA }) =>
            prevPromise.then(async () => {
                const context = knex.withSchema(SCHEMA);

                // Get existent rows
                const existent = await context.table(TABLE).select();

                // Delete all rows for every table.
                await context.table(TABLE).delete();
                existent.forEach((row) => {
                    const val = { [ID]: row[ID] };
                    process.stdout.write(`[${TABLE}:delete] ${JSON.stringify(val)}\n`);
                });

                // Insert all rows described in either public or local seeds
                const inserted = await [EXT.SEED, EXT.SEED_LOCAL].reduce(
                    (prevExtPromise, ext) =>
                        prevExtPromise.then(async (rows) => {
                            const path = PATH.join(__dirname, SCHEMA, [TABLE, ext].join(""));
                            const stat = await FS.stat(path);
                            if (!stat.isFile()) return false;
                            // A file exist:
                            // - insert rows on table
                            // - return inserted rows (with cols populated)
                            // - concat rows with previousResult.
                            return rows.concat(
                                await context.table(TABLE).insert(require(path), "*"),
                            );
                        }),
                    Promise.resolve([]),
                );
                if (!inserted) return;
                inserted.forEach((row) =>
                    process.stdout.write(`[${TABLE}:insert] ${JSON.stringify(row)}\n`),
                );
            }),
        Promise.resolve(),
    );
};
