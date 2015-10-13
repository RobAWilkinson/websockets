var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({port: 8080});
var connections = [];
wss.on('connection', function(ws) {
    connections.push(ws);
    ws.on('message', function(message) {
        connections.forEach(function(connection) {
          connection.send(message);
        });
    });
});
