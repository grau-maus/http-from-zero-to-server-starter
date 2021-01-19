const http = require("http");

http.createServer((request, response) => {
    console.log("test");

    if (request.url === "/OK") {
        console.log("Request accepted.");
        response.writeHead(200);


    } else {
        response.writeHead(404);
        console.log("Resource not found.");
    }

    response.end();
}).listen(3000, () => {
    console.log(`listening on port ${3000}`);
});
