// //db.config.js
// const mysql = require("mysql2")


// var connection = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: '123456',
//     database: 'demo_test',
//     keepAliveInitialDelay: 100
// });
// module.exports = connection




///////////////////
const mysql = require("mysql2");

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'library',

});

module.exports = connection;

///////////////////////


// const mysql = require("mysql2");

// const connection = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: '123456',
//     database: 'library',

// });

module.exports = connection;
