//hello intent

module.exports.process = function process(intentData,cb) {

    return cb(false, ("Hi there, nice to meet you, I'm " + intentData.entities.intent[0].confidence*100 + "% sure."));

     
};