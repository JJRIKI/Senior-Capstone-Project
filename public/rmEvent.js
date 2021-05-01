var mysql = require('mysql');
const fs = require('fs');
var con = mysql.createConnection({
  host: "localhost", //TODO docker host server
  user: "root",
  password: "root",
  database: "nimble"
});

function rmEvent(id) {
    con.connect(function(err) {
      if (err) throw err;
      con.query("DELETE FROM Events WHERE id = " +id, function (err, result, fields) {
        if (err) throw err;
        });
    });
}