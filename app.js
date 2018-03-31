var tpLink = require("tplink-smarthome-api");
var config = require("./config.js");

const client = new tpLink.Client();
const plug = client.getPlug({host: config.host});

let filter = function( arr ){
    return Object.keys(arr).includes("power") && arr['power'].toFixed(2) || 0;
};

setInterval( function(){plug.emeter.getRealtime().then(filter).then(console.log);}, 1000);