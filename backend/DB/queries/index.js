const { db }=require("../index");

// get single user data
export const getUser = (id) => 
{
    db.one('SELECT * FROM users WHERE active = $1', id)
    .then(data => {
        console.log('our user data:', data);
        return data.json();
    })
    .catch(error => {
        console.log('failed fetching user');
        throw error;
    });
};
