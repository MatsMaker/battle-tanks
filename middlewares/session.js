const session = require('express-session');
const sessionStore = require('./sessionStore').mongoStore;
/**
 * Session.
 */
module.exports = session({
  key: process.env.SESSION_SID,
  resave: false,
  saveUninitialized: true,
  secret: process.env.SESSION_SECRET,
  store: sessionStore,
  rolling: true,
  cookie: {
    secure: false,
    maxAge: 2419200000
  }
})
