//Database Connection and Functions
const mysql = require('mysql');
const SQL_USER = process.env.SQL_USER || 'root';
const SQL_PASS = process.env.SQL_PASS || '';
const CLEARDB_DATABASE_URL = process.env.CLEARDB_DATABASE_URL || 'localhost';


mysql://b42c64e282667c:d6ea66b1@us-cdbr-iron-east-04.cleardb.net/heroku_d8331a8cbcce2bc?reconnect=true

const connection = mysql.createConnection(CLEARDB_DATABASE_URL);

/*
Simple Test Function to verify MySql functionality - not used elsewhere
*/

//***************************************


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
