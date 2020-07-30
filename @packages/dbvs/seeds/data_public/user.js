require("dotenv").config();

const { POSTGRES_USER, POSTGRES_PASSWORD } = process.env;

module.exports = [
    {
        name_first: "Root",
        name_last: "User",
        email: `${POSTGRES_USER}@localhost`,
        password: POSTGRES_PASSWORD,
    },
];
