//var buf = new Buffer('ABCDEF');
//console.log(buf.length);     // 6
//console.log(buf.toString());
var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var htmlfile = "index.html";
/*
fs.readFile('index.html',function (err, data) {
 // if (err) throw err;
//console.log(data); 
// mainData = data

buf = new Buffer(data);
//console.log(buf.length);     // 6
//console.log(buf.toString()); // ABCDEF
mainData = buf.toString();
 // return mainData;
});
*/
app.get('/', function(request, response) {
 var html = fs.readFileSync(htmlfile).toString();
 response.send(html);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
