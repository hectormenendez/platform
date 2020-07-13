require("dotenv").config();

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_PORT, POSTGRES_DB } = process.env;

module.exports = {
    options: {
        connection: `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@localhost:${POSTGRES_PORT}/${POSTGRES_DB}`,
        schema: ["public"],
        watch: true,
        dynamicJson: true,
        subscriptions: true,
        enhanceGraphiql: true,
    },
};
