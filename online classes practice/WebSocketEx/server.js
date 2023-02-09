const http = require("http");
const server = require("websocket").server;
let socket = new server({
    httpServer: http.createServer().listen(8080, () => {
        console.log("server listening the port no 8080");
    })
});
socket.on("request", function (request) {
    let connection = request.accept(null, request.origin);
    connection.on("message", function (message) {
        connection.send(message.utf8Data);
        connection.send("Hello-1");
        connection.send("Hello-2");
        setTimeout(() => {
            connection.send("Hello-3")

        }, 10000);
    })
    connection.on("close", function (connection) {
        console.log("server closed");
    })

});
