const service = require("../server/service");
const http = require("http");
const slackClient = require("../server/slackClient.js");

const slackToken = "xoxb-330610783633-368156099938-uFoZqQbBY0G04Wg5ujQnMQxf";
const slackLogLevel = "debug";



const witToken = "RSI4VN7RZSFR6MS5ESBFHU3G3XED4UPT";
const witClient = require("../server/witClient")(witToken);



const rtm = slackClient.init(slackToken, slackLogLevel, witClient);

rtm.start();


const server = http.createServer(service);

server.on("listening", function() {
    console.log(`microserver is listing on port ${server.address().port} in ${service.get("env")}`);
});
    

rtm.on("authenticated", function() {

    server.listen(3000);

});






