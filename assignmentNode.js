var http = require('http');
var fs = require('fs');

var pert = 8080;

http.createServer( function(request, response){
    
    fs.readFile('assignmentNode.html', function(err, content) {
        if(err) {
            response.writeHead(404, {'Content-Type': 'text/html'});
            logger.emit('error', err);
            response.end('failed');
        } else {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(content);
        }
    })
}).listen(pert);