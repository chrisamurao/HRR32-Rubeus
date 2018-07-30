//Database Connection and Functions
const mysql = require('mysql');
const localDBConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'greenfield'
}

/**
 * Global var used in handleDisconnect
 */
var DATABASE_URL = process.env.CLEARDB_DATABASE_URL || localDBConfig;

const connection = mysql.createPool(DATABASE_URL);

connection.on('error', function (err) {
  console.log(err.code); // 'ER_BAD_DB_ERROR'
});

const handleDisconnect = (client) => {
  client.on('error', function (error) {
    if (!error.fatal) return;
    if (error.code !== 'PROTOCOL_CONNECTION_LOST') throw err;

    console.error('> Re-connecting lost MySQL connection: ' + error.stack);

    // NOTE: This assignment is to a variable from an outer scope; this is extremely important
    // If this said `client =` it wouldn't do what you want. The assignment here is implicitly changed
    // to `global.mysqlClient =` in node.
    connection = mysql.createConnection(DATABASE_URL);
    handleDisconnect(mysqlClient);
    connection.connect();
  });
};
handleDisconnect(connection);

module.exports = {
  connection: connection
};

//mysql -u -root > db/schema.sql
//mysql -u -root -p
