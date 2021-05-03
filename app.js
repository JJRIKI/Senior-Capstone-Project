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
const sql = require('mssql');
const fs = require('fs');

const configDocker = {
	user: 'sa',
	password: 'super_duper_password',
	server: 'nimble2021',
	database: 'Events',
	options: {
		enableArithAbort: true
	}
}

var static = require('node-static');
var http = require('http');

var port = process.env.PORT;
var directory = __dirname + '/public';

var file = new static.Server('./public');

var eventJSON;
const run = async () => {
	let pool;
	try {
		console.log('Connection opening...');
		pool = await sql.connect(config);
		const { recordset } await sql.query('SELECT * FROM Events');
		console.log(recordset);
	} catch(err) {
		console.log(err);
	} finally {
		pool.close();
		console.log('Connection closed');
	}
	eventJSON = JSON.stringify(recordset);
	fs.writeFile('./public/events.json', eventJSON, (err) => {
		if (err) {
			console.log(err);
		}
		else {
			consolelog('File written successfully');
		}
	}

} run();



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
