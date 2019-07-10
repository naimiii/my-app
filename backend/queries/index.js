const {db}=require("../index");
const fetchUser =(id) =>
{
    db.any('SELECT * FROM users WHERE active = $1', [true])
    .then(function(data) {
        // success;
    })
    .catch(function(error) {
        // error;
    });
};