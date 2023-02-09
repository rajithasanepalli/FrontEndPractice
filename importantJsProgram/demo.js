var http = require("http");
http.createServer(
    function (request, response) {
        response.end("This is output from node app>>>>>>");
    }
).listen(9090);
console.log("server stated on the post number 9090.....");