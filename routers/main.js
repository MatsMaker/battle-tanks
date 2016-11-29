const express = require('express');
const router = express.Router();
const path = require('path');

const cntrlIndex = require('../controllers/index');
const cntrlClient = require('../controllers/client');
const cntrlSignin = require('../controllers/signin');
const cntrlSignUp = require('../controllers/signup');
const cntrlNoPage = require('../controllers/noPage');


/**
 * API keys and Passport configuration.
 */
const passportConfig = require('../config/passport');

router.use((req, res, next) => {
  next();
});

router.get('/', cntrlIndex.index);
router.get('/play', passportConfig.isAuthenticated, cntrlClient.getPlay);

router.get('/signin', cntrlSignin.getSignin);
router.post('/signin', cntrlSignin.postSignin);
router.get('/signout', cntrlSignin.getSignOut);

router.get('/signup', cntrlSignUp.getSignUp);
router.post('/signup', cntrlSignUp.postSignUp);

router.get('/*', cntrlNoPage.noPage);

module.exports = router;
