const mysql = require('mysql');
require('dotenv').config();

const UserName = process.env.USER_NAME;
const Password = process.env.PASSWORD;
const Database = process.env.DATABASE;
const Host = process.env.HOST;

let connection = mysql.createConnection({
    host: Host,
    user: UserName,
    password: Password,
    database: Database
});

function openConnection()
{
    connection.connect((err: any)=>{
        if(err)
        {
            console.error("Could not connect to the database", err.message);
        }
        else{
            console.log("connection to Database is successful.");
        }
    })
}

function closeConnection()
{
    connection.end(function(err:any) {
        if (err) {
          return console.log('Could not close connection:' + err.message);
        }
        console.log('Connection to the database is closed.');
    });    
}

module.exports = {openConnection, closeConnection};