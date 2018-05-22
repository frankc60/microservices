const service = require("../server/service");
const http = require("http");

const server = http.createServer(service);

server.on("listening", function() {
    console.log(`microserver is listing on port ${server.address().port} in ${service.get("env")}`);
})


server.listen(3000);