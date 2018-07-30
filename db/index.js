//Database Connection and Functions
const mysql = require('mysql');
const SQL_USER = process.env.SQL_USER || 'root';
const SQL_PASS = process.env.SQL_PASS || '';
const DATABASE_URL = process.env.DATABASE_URL || 'localhost';


const connection = mysql.createConnection({
  host      : DATABASE_URL,
  user      : SQL_USER,
  password  : SQL_PASS,
  database  : 'greenfield'
});

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
