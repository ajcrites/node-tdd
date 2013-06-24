var http = require('http');

exports.server = function (route) {
    http.createServer(function (request, response) {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("hello world");
        response.end();
    }).listen('8080');
};
