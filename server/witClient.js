/* curl \
 -H 'Authorization: Bearer RSI4VN7RZSFR6MS5ESBFHU3G3XED4UPT' \
 'https://api.wit.ai/message?v=20180522&q=' */

const request = require("superagent");

function handleWitResponse(res) {

    //let x = JSON.parse(res.text);
    //console.log(x._text);
   return res.text; //.entities;
}

module.exports = function(token) {

    const ask = function(msg, cb) {

        request.get("https://api.wit.ai/message")
            .set("Authorization", "Bearer " + token)
            .query({v: '20180522'})
            .query({q: msg})
            .end((err,res) => {
                if(err) return cb(err);

                if(res.statusCode != 200) return cb("ERROR: status code " + res.statusCode);

                const witResponse = handleWitResponse(res);
                console.log(witResponse)
                return cb(null,witResponse)
            })

      //  console.log("ask " + msg);
      //  console.log("token" + token);

    }



    return {
        ask: ask,

    }

}