//beer intent

module.exports.process = function process(intentData,cb) {

    let beerFavourite = "MONTEITH’S";


return cb(false, ("beer is good! I'm " + intentData.entities.intent[0].confidence*100 + "% sure. My favourite is " + beerFavourite));


};