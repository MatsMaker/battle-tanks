const mwSession = require('./session');
const socketio = require('socket.io');
const cntrlGame = require('../controllers/game');

module.exports = (server) => {

  const io = socketio(server);

  // io.use((socket, next) => {   mwSession(socket.request, socket.request.res, next); });

  const passport = require('passport');
  require('../config/passport');
  const passportSocketIo = require('passport.socketio');
  const autnConf = {
    key: process.env.SESSION_SID,
    secret: process.env.SESSION_SECRET,
    store: require('./sessionStore').mongoStore,
    passport: passport,
    cookieParser: require('cookie-parser'),
    success: (data, accept) => {
      accept(null, true);
    },
    fail: (data, message, error, accept) => {
      console.log(message);
      accept(null, !error);
    }
  }
  io.use(passportSocketIo.authorize(autnConf));

  io.sockets.on('connection', socket => {

    socket.on('message', response => {
      if (socket.request.user && socket.request.user.logged_in) {
        console.log(socket.request.user);
      }

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
