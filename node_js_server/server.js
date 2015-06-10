var http = require("http");
var fs = require("fs");

var server = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  home(request, response);
  response.end();
});

function view(templateName, response) {
  var fileContents = fs.readFileSync("./" + templateName + ".html");
  response.write(fileContents);
}

function home(request, response) {
  if(request.url === "/") {
    view("index", response);
  }
}





server.listen(3000);
console.log("Server is listening");
