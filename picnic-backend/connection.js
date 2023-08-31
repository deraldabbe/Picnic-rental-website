const mysql = require("mysql");

const mysqlConnection = mysql.createConnection({
  host: "10.0.0.94",
  user: "admin",
  password: "Autoplus1!",
  database: "picnic_rental",
});

mysqlConnection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

module.exports = mysqlConnection;
