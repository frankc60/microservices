

module.exports.process = function process(intentData,cb) {

    if(intentData.entities.intent[0].value != "time") cb(new Error(`not timeIntent, got ${intentData.entities.intent[0].value}`));

    if (!intentData.entities.location) return cb(false,("missing the location for time query!"));

   // if (intentData.entities.location[0].resolved.values.name) {
    let timezone = "";
    if (intentData.entities.location[0].resolved.values[0].timezone) {
        timezone = ", " + intentData.entities.location[0].resolved.values[0].timezone;
}
    
    return cb(false, `I'm ${(intentData.entities.location[0].confidence) * 100}% sure you mean: ${JSON.stringify(intentData.entities.location[0].resolved.values[0].name)} ${timezone} `);
   // }

   // return cb(false, `i dont yet know the time in ${JSON.stringify(intentData.entities.location[0])}`); //.location[0].value}`);
};