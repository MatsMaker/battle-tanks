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

    socket.on('data', response => {
      let data;
      if (socket.request.user && socket.request.user.logged_in) {
        // console.log(socket.request.user);
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
      } else {
        data = {
          type: 'error',
          error: 'notAuthorized'
        }
      }
      // console.log(socket.request.session);
      game.emit('data', {
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
