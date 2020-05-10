var http = require('http');

http.createServer(function (req, res) {
    console.log("Got a request");
    res.write('Hello World!');
    res.end();
}).listen(8080);
