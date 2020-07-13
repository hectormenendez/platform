require("dotenv").config();
const { DB_SCHEMA } = require("./constants");

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_PORT, POSTGRES_DB } = process.env;

module.exports = {
    options: {
        connection: `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@localhost:${POSTGRES_PORT}/${POSTGRES_DB}`,
        schema: Object.values(DB_SCHEMA).filter(val => val !== DB_SCHEMA.PRIVATE),
        watch: true,
        dynamicJson: true,
        subscriptions: false,
        enhanceGraphiql: true,
    },
};
