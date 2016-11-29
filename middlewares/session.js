const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
/**
 * Session.
 */
module.exports = session({
  resave: true,
  saveUninitialized: true,
  secret: process.env.SESSION_SECRET,
  store: new MongoStore({
    url: process.env.MONGODB_URI || process.env.MONGOLAB_URI,
    autoReconnect: true
  })
})
