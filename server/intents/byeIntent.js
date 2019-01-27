//good bye intent



module.exports.process = function process(intentData,cb) {

    if(intentData.entities.intent[0].value != "bye") cb(new Error(`not beer, got ${intentData.entities.intent[0].value} instead.`));

    if (!intentData.entities.location) return cb(false,("see you later!"));

   // if (intentData.entities.location[0].resolved.values.name) {
    let timezone = "";
    if (intentData.entities.location[0].resolved.values[0].timezone) {
        timezone = ", " + intentData.entities.location[0].resolved.values[0].timezone;
}
    
    return cb(false, `I'm ${(intentData.entities.location[0].confidence) * 100}% sure you mean: ${JSON.stringify(intentData.entities.location[0].resolved.values[0].name)} ${timezone} `);
   // }

   // return cb(false, `i dont yet know the time in ${JSON.stringify(intentData.entities.location[0])}`); //.location[0].value}`);
};