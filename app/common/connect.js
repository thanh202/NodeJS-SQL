var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "demo_node_api",
});

connection.connect(function (err, connection) {
  if (err) console.log("Ket noi CSDL susetfully");
});

module.exports = connection;
