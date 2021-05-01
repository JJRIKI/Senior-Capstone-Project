var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost", //TODO docker host server
  user: "root",
  password: "root",
  database: "nimble"
});

function pshEvent(id, title, start) {
    con.connect(function(err) {
      if (err) throw err;
        con.query("INSERT INTO Events (id, title, start) VALUES (\'" + id + "\',  \'" + title + "\', \'" + start + "\')", function (err, result, fields) {
        if (err) throw err;
        });
    });
}