/* curl \
 -H 'Authorization: Bearer RSI4VN7RZSFR6MS5ESBFHU3G3XED4UPT' \
 'https://api.wit.ai/message?v=20180522&q=' */

module.exports = function(token) {

    const ask = function(msg) {

        console.log("ask " + msg);
        console.log("token" + token);

    }



    return {
        ask: ask,

    }

}