var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  fs.readFileSync('index.html', 'utf8', function(err, text){
    response.send(text);
  });
  /*response.render('./index.html');
  response.send('Hello World 2!');
  fs.readFileSync('./index.html', function(err, data)){
    response.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
    if (err) {
      throw err;
    }
    response.write(data);
    response.end();
  });  */
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
