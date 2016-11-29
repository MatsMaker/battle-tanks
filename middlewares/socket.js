const mwSession = require('./session');
const socket = require('socket.io');
const cntrlGame = require('../controllers/game');

module.exports = (server) => {

  const io = socket(server);

  io.use((socket, next) => {
    mwSession(socket.request, socket.request.res, next);
  });

  io.sockets.on('connection', socket => {

    socket.on('message', response => {
      let data;
      switch (response.type) {

        case 'auth':
          data = {
            userId: cntrlGame.auth(response, socket)
          };
          break;

        case 'getTanks':
          data = {
            tanks: cntrlGame.getTanks(response)
          };
          break;

        case 'updateTank':
          data = {
            result: cntrlGame.updateTank(response)
          };
          break;

        case 'initTank':
          data = {
            done: cntrlGame.initTank(response)
          };
          break;

        default:
          data = {
            error: 'not right type request'
          }
      }

      // console.log(socket.request.session);

      io.emit('message', {
        type: response.type,
        data: data
      });

    })

    socket.on('disconnect', response => {
      io.emit('message', {
        type: 'disconnect',
        data: {
          userId: cntrlGame.disconnect(socket)
        }
      });

    });

  });

}
