//thanks intent

/* (channel: DAU1N6YN7) U9QHYP1U1 says: thanks {
    "_text": "thanks",
    "entities": {
        "intent": [{
            "confidence": 0.72490082726366,
            "value": "thanks"
        }],
        "thanks": [{
            "confidence": 0.99494850632013,
            "value": "true"
        }]
    },
    "msg_id": "1IhBh9B7l9cSu83RQ"
} */



module.exports.process = function process(intentData,cb) {

      if (intentData.entities.intent[0].value == "thanks") {
        cb(false, (`I'm ${intentData.entities.intent[0].confidence*100}% sure you are thankful.`));
    }
    
    return;

};