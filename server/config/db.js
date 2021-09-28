// Set up the database connection
// To create the connection, you must create a .env file in the root directory of the server, and install dotenv.
// The .env file should contain the following variables:
// DB_HOST=
// DB_USER=
// DB_PASSWORD=
// DB_NAME=
require('dotenv').config();
const mysql = require('mysql');

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Creates the table in the database
let createTable = "CREATE TABLE IF NOT EXISTS posts (id INT AUTO_INCREMENT PRIMARY KEY NOT NULL UNIQUE, title TEXT NOT NULL, post_text TEXT NOT NULL, user_name VARCHAR(45) NOT NULL, date_posted DATETIME NOT NULL)";

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

db.query(createTable, (err, result) => {
    if (err) {
        throw err;
    }
    console.log('Table created');
});

module.exports = db;