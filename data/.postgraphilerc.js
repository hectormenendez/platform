require("dotenv").config();
const { DB_SCHEMA } = require("./constants");

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_PORT, POSTGRES_DB } = process.env;

module.exports = {
    options: {
        connection: `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@localhost:${POSTGRES_PORT}/${POSTGRES_DB}`,
        schema: Object.values(DB_SCHEMA).filter((val) => val !== DB_SCHEMA.PRIVATE),

        subscriptions: true,
        watch: true,
        dynamicJson: true,
        allowExplain: true, // experimental
        appendPlugins: "@graphile-contrib/pg-simplify-inflector",
        enhanceGraphiql: true,
        enableQueryBatching: true,
        legacyRelations: "omit",
    },
};
