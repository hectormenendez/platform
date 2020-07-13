/** @typedef {import("knex")} Knex */

const { DB_TABLE, DB_FIELD } = require("../constants");

const { COMMON } = DB_FIELD;
const USER = DB_FIELD[DB_TABLE.USER];

module.exports = {
    /**
     * What to do when creating.
     * @param {Knex} knex
     */
    async up({ schema, fn }) {
        await schema.createTable(DB_TABLE.USER, (table) => {
            table.increments(COMMON.ID).notNullable();
            table.string(USER.EMAIL, 254).notNullable().unique();
            table.string(USER.PASSW, 500).notNullable();
            table.string(USER.FNAME, 128).notNullable();
            table.string(USER.LNAME, 128).notNullable();
            table.dateTime(COMMON.CDATE).notNullable().defaultTo(fn.now());
            table.dateTime(COMMON.UDATE).notNullable().defaultTo(fn.now());
            table.dateTime(COMMON.DDATE);
        });
    },

    /**
     * What to do when removing.
     * @param {Knex} knex
     */
    async down({ schema }) {
        await schema.dropTable(DB_TABLE.USER);
    },
};
