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
        console.log(message.utf8Data);
        connection.sendUTF("hello-1");
        connection.sendUTF("hello-2");
        connection.sendUTF("hello-3");
        setTimeout(() => {
            connection.sendUTF("hello-4");
        }, 10000);

    });
    connection.on("close", function (connection) {
        console.log("connection closed");
    })


});