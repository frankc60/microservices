//good bye intent



module.exports.process = function process(intentData, cb) {
    
  
    return cb(false, `See you Later ! ${(intentData.entities.intent[0].confidence) * 100}% sure`);
};