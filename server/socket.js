const { Server } = require('socket.io');

const cors = { origin: '*' };

function initSocket(httpServer) {
  const wsServer = new Server(httpServer, { cors });

  wsServer.on('connection', (socket) => {
    console.log('Connection established');

    socket.on('disconnect', () => {
      console.log(`Client disconnected: ${socket.id}`);
    });
  });
}

module.exports = initSocket;
