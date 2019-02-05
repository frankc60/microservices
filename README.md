# SlackBot Microservices
written in nodejs. microservices uses slack-node-sdk to connect to a bot.
as well as using natural language processor - Wit.ai

## What I learnt
* How Slack works
* Slack API, Event API, RTM API
* Setting up and configuring Wit.ai - natural language processor: intents, confidence, teaching
* Allowing Slack messages to be understood and processed in NodeJs
* Building and designing a microservice that interfaces with Slack and Wit.ai in realtime
* Integrated online in Heroku cloud, and got working in slack 24/7. - "dnb-frankbot"

### more
1. node /bin/run.js
2. open Slack, log in
3. check bot: franko
4. ask him  
     "Hi"  
     "do you like beer ?"  
     "what is the time in Auckland ?"  
     "thanks"  
     "see you later"  
     "directory list" - runs a command and returns value
     "info" - server info command return values
     "hardware" - pauses a few seconds before replying

     Try adding a pin to a message, and frankbot will respond to the event.

#### To setup
You need to setup a Slackbot, using the Hubot app.
You need to setup Heroku (or you can get this running on your local node server with minor changes)
You need to setup Wit.ai
