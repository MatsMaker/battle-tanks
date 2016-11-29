const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const mongoStore = new MongoStore({
  url: process.env.MONGODB_URI || process.env.MONGOLAB_URI,
  autoReconnect: true
});

exports.mongoStore = mongoStore;
