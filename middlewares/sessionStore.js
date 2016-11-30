const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

module.exports = new MongoStore({
  url: process.env.MONGODB_URI || process.env.MONGOLAB_URI,
  autoReconnect: true
});
