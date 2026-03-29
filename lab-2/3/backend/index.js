const http = require('http');
const socketIo = require('socket.io');

const server = http.createServer();

const io = socketIo(server, {
  cors: {
    origin: "*", 
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log(`[+] Client conectat: ${socket.id}`);


  socket.on('chat-message', (msg) => {
    console.log(`Mesaj primit: ${msg}`);

    io.emit('chat-message', msg);
  });

  socket.on('disconnect', () => {
    console.log(`[-] Client deconectat: ${socket.id}`);
  });
});

server.listen(8000, () => {
  console.log('Serverul de Chat ruleaza pe portul 8000!');
});