const service = require("../server/service");
const http = require("http");
const slackClient = require("../server/slackClient.js");


//Cannot store the slackToken publically (eg. github), so it is local. if u don't have this token, u'll need to create a new one from slack,
//for example:
//const slackToken = "xoxb-330610783633-368156099938-uFoZqQbBY0G04Wg5ujQnMQxf";
//SLACK WILL DISABLE THIS TOKEN AFTER A WHILE!
//
//create a new token from slack:
//https: //frankc60.slack.com/admin/settings#integrations
//App & custom integratios
//Manage - Apps
//Hubot
//Congigurations pen icon
//Integration ettings, API / Token

//remove slackToken before pushing to Github!

//const slackToken = "xoxb-330610783633-368156099938-uFoZqQbBY0G04Wg5ujQnMQxf";
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

    console.log("authenicated");
    server.listen(3000);

});






