/** @typedef {import("../util/sql-tools")} SQLTools */

const { DB_SCHEMA, DB_TABLE, DB_FIELD } = require("../../constants");

const { COMMON } = DB_FIELD;
const USER = DB_FIELD[DB_TABLE.USER];
const SCHEMA_ALL = Object.values(DB_SCHEMA);
const SCHEMA_DEFAULT = "public";

module.exports = {
    /** @param {SQLTools} tools */
    up({ Schema, Table, Field, Check, KWORD, SET }) {
        const { NOTNULL, UNIQUE } = KWORD;
        const { NOW } = SET;

        // 01: Remove default schema
        Schema.drop({ name: SCHEMA_DEFAULT, safe: true });

        // 02: Populate internal schemas
        SCHEMA_ALL.forEach((name) => Schema.create({ name, safe: true }));

        // 03: Create user table
        Table.create({
            name: DB_TABLE.USER,
            schema: DB_SCHEMA.PUBLIC,
            safe: true,
            fields: [
                Field.id({ name: COMMON.ID }),
                Field.text({
                    name: USER.EMAIL,
                    comment: ["@name my_new_column", "I am description"],
                    set: [NOTNULL, UNIQUE],
                    check: [Check.charLen("< 255")],
                }),
                Field.text({
                    name: USER.PASSW,
                    comment: ["A password."],
                    set: [NOTNULL, UNIQUE],
                    check: [Check.charLen("<= 64")],
                }),
                Field.text({
                    name: USER.FNAME,
                    comment: ["Firstname"],
                    set: [NOTNULL],
                    check: [Check.charLen("<= 32")],
                }),
                Field.text({
                    name: USER.LNAME,
                    comment: ["Lastname"],
                    set: [NOTNULL],
                    check: [Check.charLen("<= 32")],
                }),
                Field.dateTime({ name: COMMON.CDATE, kword: NOTNULL, set: NOW }),
                Field.dateTime({ name: COMMON.UDATE, kword: NOTNULL, set: NOW }),
                Field.dateTime({ name: COMMON.DDATE }),
            ],
        });
    },

    /** @param {SQLTools} tools */
    down({ Table, Schema }) {
        // 03
        Table.drop({ name: DB_TABLE.USER, schema: DB_SCHEMA.PUBLIC });

        // 02
        SCHEMA_ALL.forEach((name) => Schema.drop({ name }));

        // 01
        Schema.create({ name: SCHEMA_DEFAULT });
    },
};
