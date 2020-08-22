// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '13308994tennis!', 
    database: 'employees'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Connected to the employees database.');
});

module.exports = connection;