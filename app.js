const http = require('http');
const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const app = express();

const main = require('./routers/main');
/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.load({path: '.env.example'});
/**
 * Connect to MongoDB.
 */
mongoose.Promise = global.Promise;
console.log(process.env.MONGODB_URI || process.env.MONGOLAB_URI);
mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI);
mongoose.connection.on('error', () => {
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
  process.exit();
});
/**
 * Session.
 */
var sessionObj = session({
  resave: true,
  saveUninitialized: true,
  secret: process.env.SESSION_SECRET,
  store: new MongoStore({
    url: process.env.MONGODB_URI || process.env.MONGOLAB_URI,
    autoReconnect: true
  })
});

app.use(sessionObj);
/**
 * View engine setup.
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
/**
 * Public.
 */
app.use(express.static(path.join(__dirname, 'public')));
/**
 * Routers.
 */
app.use('/', main);

const server = http.createServer(app);
server.listen(process.env.PORT);


const cntrlClient = require('./controllers/client');

const io = require('socket.io')(server);
cntrlClient(io, sessionObj);
