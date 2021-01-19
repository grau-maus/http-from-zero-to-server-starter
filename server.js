const http = require("http");
http.createServer((request, response) => {
    if (request.method === "POST") {
        console.log("requested POST");
    }

    if (request.url === "/OK") {
        response.writeHead(200);
    }
    else if (request.url === "/Bad-Request") {
        response.writeHead(400);
    }
    else if (request.url === "/Created") {
        response.writeHead(201);
    }
    else if (request.url === "/Forbidden") {
        response.writeHead(403);
    }
    else if (request.url === "/Found") {
        response.writeHead(302);
    }
    else if (request.url === "/Gateway-Timeout") {
        response.writeHead(504);
    }
    else if (request.url === "/Internal-Server-Error") {
        response.writeHead(500);
    }
    else if (request.url === "/Moved-Permanently") {
        response.writeHead(301);
    }
    else if (request.url === "/Unauthorized") {
        response.writeHead(401);
    }
    else if (request.url === "/Bonus/Webpage") {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("<h1>Hello World html</h1>");
    }
    else if (request.url === "/Bonus/Redirect") {
        response.writeHead(302, { "Location": "http://localhost:3000/Forbidden" });
    }
    else {
        response.writeHead(404);
        console.log("Resource not found.");
    }
    response.end();
}).listen(3000, () => {
    console.log(`listening on port ${3000}`);
});
