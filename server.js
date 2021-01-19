const http = require("http");

http.createServer((request, response) => {
    response.end();
}).listen(3000, () => {
    console.log(`listening on port ${3000}`);
});
