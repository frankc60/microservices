//beer intent



module.exports.process = function process(intentData,cb) {

    if(intentData.entities.intent[0].value != "beer") cb(new Error(`not beer, got ${intentData.entities.intent[0].value} instead.`));

    if (intentData.entities.intent[0].value == "beer") return cb(false, ("beer is good! " + intentData.entities.intent[0].confidence*100 + "% sure."));

    return; 
};