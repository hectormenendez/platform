require("dotenv").config();

const { POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD } = process.env;

module.exports = {
    development: {
        client: "pg",
        debug: true,
        connection: {
            database: POSTGRES_DB,
            user: POSTGRES_USER,
            password: POSTGRES_PASSWORD,
        },
        migrations: {
            schemaName: "knex",
            tableName: "dbvs",
            directory: "./dbvs",
        },
        seeds: {
            // the directory is not being used per-se, since we're only running a single root seeed.
            directory: "./dbvs/_seeds",
        },
    },
};
