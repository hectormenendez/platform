const DB_TABLE_NAME = {
    USER: "user",
};

const DB_TABLE_FIELD = {
    COMMON: {
        ID: "id",
        CDATE: "date_created",
        UDATE: "date_updated",
        DDATE: "date_deleted",
    },
    [DB_TABLE_NAME.USER]: {
        EMAIL: "email",
        PASSW: "password",
        FNAME: "name_first",
        LNAME: "name_last",
    },
};

const DB_TABLE_ORDER = [DB_TABLE_NAME.USER];

module.exports = {
    DB_TABLE_NAME,
    DB_TABLE_FIELD,
    DB_TABLE_ORDER,
    EXT: {
        SEED: ".js",
        SEED_LOCAL: ".local.js",
    },
};
