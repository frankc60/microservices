

module.exports.process = function process(intentData,cb) {

    if(intentData.entities.intent[0].value != "time") cb(new Error(`not timeIntent, got ${intentData.entities.intent[0].value}`));

    if (!intentData.entities.location) return cb(new Error("missing the location from timeIntent"));

    return cb(false,`i dont yet know the time in ${intentData.entities.location[0].value}`);
};