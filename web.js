var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  /*response.send('Hello World 2!'); */
  // -- fs.readFileSync('index.html', function(err, data){
    // response.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
    // -- if (err) { throw err; }
    // var buffer = new Buffer(data, "ascii");
    var data = fs.readFileSync('index.html', buffer.toString());
    response.send(data);
    response.end();
  // -- });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
