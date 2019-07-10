const { db }=require("../index");

export const fetchUser = (id) => 
{
    db.one('SELECT * FROM users WHERE active = $1', [true])
    .then(data => {
        console.log('our user data:', data);
        return data.json();
    })
    .catch(error => {
        console.log('failed fetching user');
        throw error;
    });
};
