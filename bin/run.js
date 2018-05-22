const service = require("../server/service");
const http = require("http");
const slackClient = require("../server/slackClient.js");

const slackToken = "xoxb-330610783633-368156099938-uFoZqQbBY0G04Wg5ujQnMQxf";
const slackLogLevel = "debug";

const rtm = slackClient.init(slackToken, slackLogLevel);

rtm.start();


const server = http.createServer(service);

server.on("listening", function() {
    console.log(`microserver is listing on port ${server.address().port} in ${service.get("env")}`);
});
    

rtm.on("authenticated", function() {

    server.listen(3000);

});






