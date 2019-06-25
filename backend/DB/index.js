let pgp = require("pg-promise")({});
let connectionString = "postgres://localhost/nalmas-store";
let db = pgp(connectionString);

module.exports = {
    db
};
