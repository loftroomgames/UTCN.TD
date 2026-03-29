// proxy.js — Part 2: Chaos Proxy
// Sits between sender and receiver, randomly dropping 30 % of UDP packets
// to simulate an unreliable network.

const dgram = require("dgram");
const server = dgram.createSocket("udp4");

const PROXY_PORT = 4000;
const SERVER_PORT = 5500;
const DROP_RATE = 0.5; // 50 % packet loss

let total = 0;
let dropped = 0;


let clientInfo = null;


server.on("message", (msg, rinfo) => {
    let isFromServer = rinfo.port === SERVER_PORT;

    if (Math.random() < DROP_RATE) {
        console.log(`Dropped packet from ${rinfo.port}`);
        return; 
    }

    if(isFromServer) {
        if(clientInfo != null)
        {
            server.send(msg, clientInfo.port, clientInfo.address);
            console.log("ACK sent to client!");
        }
    } else {
        clientInfo = rinfo;
        server.send(msg, SERVER_PORT, "localhost");
        console.log(`Data sent to SERVER`);
    }


});


server.bind(PROXY_PORT, () => {
    console.log(`Chaos Proxy listening on port ${PROXY_PORT}`);
});
