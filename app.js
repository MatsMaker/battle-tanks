const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const passport = require('passport');
require('./config/passport');

const app = express();
const main = require('./routers/main');
/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.load({path: '.env.example'});

require('./middlewares/mongoose').connectToDB();

app.use(bodyParser.json(), bodyParser.urlencoded({extended: true}));
app.use(require('./middlewares/session'));
app.use(passport.initialize(), passport.session());
/**
 * View engine setup.
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
/**
 * Public.
 */
app.use(express.static(path.join(__dirname, 'public')), express.static(path.join(__dirname, 'public/client')));
/**
 * Routers.
 */
app.use('/', main);

module.exports = app;
