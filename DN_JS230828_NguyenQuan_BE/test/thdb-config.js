/* The commented out code in the JavaScript file is setting up a MySQL connection pool using the
`mysql2` library in Node.js. It is creating a pool connection with specific configurations like
host, user, password, database, keepAliveInitialDelay, and enableKeepAlive. Finally, it exports the
connection pool for use in other parts of the application. */
const mysql = require("mysql2");

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "truonghoc",
  keepAliveInitialDelay: 10000,
  enableKeepAlive: true,
});

module.exports = connection;