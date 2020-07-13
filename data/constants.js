const DB_TABLE = {
    USER: "user",
};

const DB_FIELD = {
    COMMON: {
        ID: "id",
        CDATE: "date_created",
        UDATE: "date_updated",
        DDATE: "date_deleted",
    },
    [DB_TABLE.USER]: {
        EMAIL: "email",
        PASSW: "password",
        FNAME: "name_first",
        LNAME: "name_last",
    },
};

const DB_ORDER = [DB_TABLE.USER];

module.exports = {
    DB_TABLE,
    DB_FIELD,
    DB_ORDER,
    EXT: {
        SEED: ".js",
        SEED_LOCAL: ".local.js",
    },
};
