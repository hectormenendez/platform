const DB_TABLE_NAME = {};

const DB_TABLE_FIELD = {
    COMMON: {
        ID: "id",
        CDATE: "date_created",
        UDATE: "date_updated",
        DDATE: "date_deleted",
    },
};

const DB_TABLE_ORDER = [];

module.exports = {
    DB_TABLE_NAME,
    DB_TABLE_FIELD,
    DB_TABLE_ORDER,
    EXT: {
        SEED: ".js",
        SEED_LOCAL: ".local.js",
    },
};
