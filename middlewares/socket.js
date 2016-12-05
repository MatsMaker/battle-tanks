// const mwSession = require('./session');
const socketio = require('socket.io');
const cntrlGame = require('../controllers/game');
const sessionStore = require('./sessionStore');

module.exports = (server) => {

  const io = socketio(server);

  // io.use((socket, next) => {   mwSession(socket.request, socket.request.res, next); });

  const passport = require('passport');
  require('../config/passport');
  const passportSocketIo = require('passport.socketio');

  const game = io.of(`/game`);
  game.use(passportSocketIo.authorize({
    key: process.env.SESSION_SID,
    secret: process.env.SESSION_SECRET,
    store: sessionStore,
    passport: passport,
    cookieParser: require('cookie-parser'),
    success: (data, accept) => {
      accept(null, true);
    },
    fail: (data, message, error, accept) => {
      console.log(message);
      accept(null, !error);
    }
  })).on('connection', socket => {
    // socket.join(socket.request.sessionID);

    setInterval(() => {
      game.emit('getTanks', {
        type: 'getTanks',
        tanks: cntrlGame.getTanks()
      });
    }, 5);

    socket.on('auth', (id, response) => {
      game.to(id).emit('auth', {
        type: 'auth',
        userId: cntrlGame.auth(response, socket)
      });
      // game.to(socket.request.sessionID).emit('auth', {
      //   type: 'auth',
      //   userId: cntrlGame.auth(response, socket)
      // });
      // game.emit('auth', {
      //   type: 'auth',
      //   userId: cntrlGame.auth(response, socket)
      // });
    });

    socket.on('updateTank', response => {
      game.emit('updateTank', {
        type: 'updateTank',
        result: cntrlGame.updateTank(response)
      });
    });

    socket.on('initTank', response => {
      const result = cntrlGame.initTank(response);
      game.emit('initTank', {
        type: 'initTank',
        done: result
      });
    });

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
