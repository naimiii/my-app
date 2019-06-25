let pgp = require("pg-promise")({});
let connectionString = "postgres://localhost/nalmas-store-database";
let db = pgp(connectionString);

module.exports = {
    db
};