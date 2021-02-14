// var static = require('node-static');
// var http = require('http');

// var port = process.env.PORT;
// var directory = __dirname + '/public';

// var file = new static.Server('./public');

// // if we arent on heroku then we need to readjust the port and directory information and we know that because the port wont be set
// if(typeof port == 'undefined' || !port){
//     directory = './public';
//     port = 8080;
// }

// // set up static web server that will deliver files from the filesystem
// var file = new static.Server(directory);

// // construct an http server that gets files from the file server
// var app = http.createServer(function(request,response){
//     request.addListener('end', 
//     function(){
//         file.serve(request,response);
//     }
//     ).resume();
// }
// ).listen(port);
// console.log('The server is running');

var PORT = process.env.PORT || 5000;
var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

app.use(express.static('client'));

server.listen(PORT, function() {
  console.log('Chat server running');
});


