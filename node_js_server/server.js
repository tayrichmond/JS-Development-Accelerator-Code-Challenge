//Require http and fs modules.
var http = require("http");
var fs = require("fs");
//Create port.
var port = process.env.PORT || 3000;

//Read from html file.
fs.readFile("./index.html", function(error, html) {
  //Add error checking.
  if(error) {
    throw error;
  }

  //Create server.
  http.createServer(function(request, response) {
    response.writeHeader(200, {"Content-Type": "text/html"});
    response.write(html);
    response.end();
    //Listen on port.
  }).listen(port);
});

//Listening message on console.
console.log("Server is listening at port " + port);
