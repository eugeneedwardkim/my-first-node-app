//required
var http = require('http');
var fs = require('fs');
var eE = require('events').EventEmitter;

//global
var port = 8080;
var logger = new eE();

logger.on('error', function(message) {
console.log('ERROR: ' + message);
});

http.createServer( function(request, response){
    
    fs.readFile('index.html', function(err, content) {
        if(err) {
            response.writeHead(404, {'Content-Type': 'text/html'});
            logger.emit('error', err);
            response.end('failed');
        } else {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(content);
        }
    })
}).listen(port);

console.log('Server running on port ' + port);