const { RTMClient } = require('@slack/client');

// An access token (from your Slack app or custom integration - usually xoxb)


function authenicated(msg) {
    console.log("authenicated : " + JSON.stringify(msg));
    console.log(`logged in as ${msg.self.name}`);
}



module.exports.init = function slackClient(token, logLvl='debug') {
    const rtm = new RTMClient(token, {LogLevel: logLvl});

    rtm.on('authenticated', (msg) => {
        authenicated(msg)
        // For structure of `event`, see https://api.slack.com/events/message
      });
    


      
    return rtm;
};

// The client is initialized and then started to get an active connection to the platform

//rtm.start();

// This argument can be a channel ID, a DM ID, a MPDM ID, or a group ID
//const conversationId = 'C1232456';

// The RTM client can send simple string messages
//rtm.sendMessage('Hello there', conversationId)
 // .then((res) => {
    // `res` contains information about the posted message
//    console.log('Message sent: ', res.ts);
 // })
//  .catch(console.error);