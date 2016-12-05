const socketio = require('socket.io');
const cntrlGame = require('../controllers/game');
const sessionStore = require('./sessionStore');

const connectedUsers = {};

module.exports = (server) => {

  const io = socketio(server);

  //socket.request.user && socket.request.user.logged_in
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
    connectedUsers[socket.request.sessionID] = socket;

    setInterval(() => {
      game.emit('getTanks', {
        type: 'getTanks',
        tanks: cntrlGame.getTanks()
      });
    }, 5);

    socket.on('auth', response => {
      connectedUsers[socket.request.sessionID].emit('auth', {
        type: 'auth',
        userId: cntrlGame.auth(response, socket)
      });
    });

    socket.on('updateTank', response => {
      cntrlGame.updateTank(response);
    });

    socket.on('initTank', response => {
      const result = cntrlGame.initTank(response);
      connectedUsers[socket.request.sessionID].emit('initTank', {
        type: 'initTank',
        done: result
      });
    });

    socket.on('disconnect', response => {
      delete connectedUsers[socket.request.sessionID];
      io.emit('message', {
        type: 'disconnect',
        data: {
          userId: cntrlGame.disconnect(socket)
        }
      });
    });

  });

}
