// receiver.js — Part 2: UDP Receiver
// Listens on port 5000 for datagrams forwarded through the Chaos Proxy.

const dgram = require("dgram");
const server = dgram.createSocket("udp4");

const PORT = 5500;
let count = 0;

const MESAJE_TOTALE = 10;

server.on("message", (msg, rinfo) => {
    count++;
    console.log(`[${count}] Received from ${rinfo.address}:${rinfo.port} → "${msg.toString()}"`);

    if(count === MESAJE_TOTALE) {
        console.log("Toate mesajele au sosit!");
    } else {
        console.log(count + " din " + MESAJE_TOTALE + " sosite." + "  ~" + count/MESAJE_TOTALE*100 + "%");
    }
});

server.bind(PORT, () => {
    console.log(`Receiver listening on port ${PORT}`);
});
