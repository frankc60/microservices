const { RTMClient } = require('@slack/client');

// An access token (from your Slack app or custom integration - usually xoxb)


function authenicated(msg) {
    console.log("authenicated : " + JSON.stringify(msg));
    console.log(`logged in as ${msg.self.name}`);
}



module.exports.init = function slackClient(token, logLvl='debug', nlpClient) {
    const rtm = new RTMClient(token, {LogLevel: logLvl});
    const nlp = nlpClient;
    rtm.on('authenticated', (msg) => {
        authenicated(msg)
        // For structure of `event`, see https://api.slack.com/events/message
      });
    
    rtm.on('message', (message) => {
        // For structure of `event`, see https://api.slack.com/events/message
    
        // Skip messages that are from a bot or my own user ID
       /*  if ( (message.subtype && message.subtype === 'bot_message') ||
                (!message.subtype && message.user === rtm.activeUserId) ) {
            return;
        }
        */ 
        // Log the message
        console.log(`(channel:${message.channel}) ${message.user} says: ${message.text}`);

        nlp.ask(message.text, (err, res) => {
            
            const conversationId = message.channel;

            if(err) {
                console.log("error " + err);
               // return;
            }

            console.log(res);
            res = JSON.parse(res);

             if(!res.entities.intent) {
                return rtm.sendMessage("sorry, i don't what you are talking about.",conversationId)
            } else if(res.entities.intent[0].value == "time" && res.entities.location) {
                return rtm.sendMessage(`i don't know the time in ${res.entities.location[0].value}`,conversationId)

            } else {
                return rtm.sendMessage(`i don't understand`,conversationId);
                console.log(res);
            }

/* 
            // The RTM client can send simple string messages
            rtm.sendMessage('Hello there!! nearly there', conversationId)
              .then((res) => {
                // `res` contains information about the posted message
                console.log('Message sent: ', res.ts);
              })
              .catch(console.error);
 */

        });

       


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