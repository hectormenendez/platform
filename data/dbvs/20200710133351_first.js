/** @typedef {import("knex")} Knex */
const { DB_SCHEMA, DB_TABLE, DB_FIELD } = require("../constants");

const { COMMON } = DB_FIELD;
const USER = DB_FIELD[DB_TABLE.USER];

const DB_SCHEMA_DEFAULT = "public";

module.exports = {
    /**
     * What to do when creating.
     * @param {Knex} knex
     */
    async up({ schema, fn }) {
        // delete default schema
        await schema.dropSchemaIfExists(DB_SCHEMA_DEFAULT);

        // create schemas
        await Promise.all(
            Object.values(DB_SCHEMA).map((name) => schema.createSchemaIfNotExists(name)),
        );

        const public = schema.withSchema(DB_SCHEMA.PUBLIC);

        await public.createTable(DB_TABLE.USER, (table) => {
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
        const public = schema.withSchema(DB_SCHEMA.PUBLIC);

        // drop created tables
        await public.dropTable(DB_TABLE.USER);

        // // drop created schemas
        // await Promise.all(
        //     Object.values(DB_SCHEMA).map((name) => schema.dropSchemaIfExists(name)),
        // );

        // // restore default schema
        // await schema.createSchemaIfNotExists(DB_SCHEMA_DEFAULT);
    },
};
