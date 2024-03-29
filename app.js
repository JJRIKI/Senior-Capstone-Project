// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

const mysql = require('mysql');
const fs = require('fs');
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'nimble2021mysql',
  database: 'nimbledb'
});

var static = require('node-static');
var http = require('http');

var port = process.env.PORT;
var directory = __dirname + '/public';

var file = new static.Server('./public');

connection.connect(function(err) {
  if (err) throw err;
  connection.query("select * from events", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    var eventJSON = JSON.stringify(result);
    
console.log(eventJSON);
    /*eventJSON = '{"events":' + eventJSON + '}';
console.log(eventJSON);*/

/*var id = 'title';
var titleStr = 'title';
var date = '2021-05-06';

var newEventString = ', { "id": "' + id + '", "title": "' + titleStr + '", "start": "' + date + '"} ';
              console.log(newEventString);

              var jsonData = JSON.parse(fs.readFileSync('./public/events.json', 'utf8'));
              var data = JSON.stringify(jsonData);
              data = data.slice(1,-1);
              var halp = '[' + data + newEventString + ']';
              console.log(halp);
    fs.writeFile('./public/events.json', halp, (err) => {
      if (err)
        console.log(err);
      else {
        console.log("File written successfully\n");
      }
    });
  });


*/
/*var oldEventString = JSON.stringify(tempFile);
var tempString 
console.log('Readfile called: ' + oldEventString);*/
//var result = oldEventString.slice(2,-2);
//result = '[' + result + newEventString + ']';


    fs.writeFile('./public/events.json', eventJSON, (err) => {
      if (err)
        console.log(err);
      else {
        console.log("File written successfully\n");
      }
    });
  });

 
  /*connection.query("SELECT * FROM Backlog", function (err, result2, fields) {
    if (err) throw err;
    console.log(result2);
    var eventJSON2 = JSON.stringify(result2);
    fs.writeFile('./public/backlog.json', eventJSON2, (err) => {
      if (err)
        console.log(err);
      else {
        console.log("File written successfully\n");
      }
      });
  });*/
});

// if we arent on heroku then we need to readjust the port and directory information and we know that because the port wont be set
if(typeof port == 'undefined' || !port){
    directory = './public';
    port = 8000;
}

// set up static web server that will deliver files from the filesystem
var file = new static.Server(directory);

// construct an http server that gets files from the file server
var app = http.createServer(function(request,response){
    request.addListener('end', 
    function(){
        file.serve(request,response);
    }
    ).resume();
}
).listen(port);
console.log(`Server running at ${port}/`);

