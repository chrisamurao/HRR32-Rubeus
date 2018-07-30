//Database Connection and Functions
const mysql = require('mysql');
const SQL_USER = process.env.SQL_USER || 'root';
const SQL_PASS = process.env.SQL_PASS || '';
var CLEARDB_DATABASE_URL = process.env.CLEARDB_DATABASE_URL || 'localhost';

const connection = mysql.createPool(CLEARDB_DATABASE_URL);

connection.on('error', function (err) {
  console.log(err.code); // 'ER_BAD_DB_ERROR'
});
/*
Simple Test Function to verify MySql functionality - not used elsewhere
*/


//***************************************


function handleDisconnect(client) {
  client.on('error', function (error) {
    if (!error.fatal) return;
    if (error.code !== 'PROTOCOL_CONNECTION_LOST') throw err;

    console.error('> Re-connecting lost MySQL connection: ' + error.stack);

    // NOTE: This assignment is to a variable from an outer scope; this is extremely important
    // If this said `client =` it wouldn't do what you want. The assignment here is implicitly changed
    // to `global.mysqlClient =` in node.
    connection = mysql.createConnection(CLEARDB_DATABASE_URL);
    handleDisconnect(mysqlClient);
    connection.connect();
  });
};
handleDisconnect(connection);

//*************************************************
// module.exports = {
//   connection: connection,
//   insertData: insertData,
//   doesExist:  doesExist,
//   createUser: createUser,
//   getUser:    getUser
// };

module.exports = {
  connection: connection
};

//mysql -u -root > db/schema.sql
//mysql -u -root -p
