#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL

    -- @see knexfile.js
    CREATE SCHEMA IF NOT EXISTS knex;

EOSQL
