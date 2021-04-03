var mysql = require('mysql');
const fs = require('fs');
var con = mysql.createConnection({
  host: "localhost",
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

