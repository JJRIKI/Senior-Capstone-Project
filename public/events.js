var mysql = require('mysql');
const fs = require('fs');
var con = mysql.createConnection({
  host: "localhost", //TODO docker host server
  user: "root",
  password: "root",
  database: "nimble"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM Events", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    var eventJSON = JSON.stringify(result);
    fs.writeFile(events.json, eventJSON); 
  });
});

function rmEvent(id) {
  con.connect(function(err) {
    if (err) throw err;
    con.query("DELETE FROM Events WHERE id = " +id, function (err, result, fields) {
      if (err) throw err;
      });
  });
}

function pshEvent(id, title, start) {
  con.connect(function(err) {
    if (err) throw err;
      con.query("INSERT INTO Events (id, title, start) VALUES (\'" + id + "\',  \'" + title + "\', \'" + start + "\')", function (err, result, fields) {
      if (err) throw err;
      });
  });
}
