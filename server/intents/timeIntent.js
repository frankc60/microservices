//time and location

module.exports.process = function process(intentData,cb) {

let timezone = "";
    try{ 
        let loc = intentData.entities.location[0].resolved.values[0].name;
        console.log(JSON.stringify(intentData))
        if ( typeof loc === "undefined" || loc === null) {
            return cb(false, ("missing the location for time query!"));
        }
        if (intentData.entities.location[0].resolved.values[0].timezone) {
            timezone = ", " + intentData.entities.location[0].resolved.values[0].timezone;
        }
    } catch(e) {
        console.log("no resolved location found, " + e);
        return cb(false, `I'm not sure of the location`);
    }
        
   
    
    return cb(false, `I'm ${(intentData.entities.location[0].confidence) * 100}% sure you mean: ${JSON.stringify(intentData.entities.location[0].resolved.values[0].name)} ${timezone} 
    I don 't know the time in ${JSON.stringify(intentData.entities.location[0].resolved.values[0].name)}`);
   
};