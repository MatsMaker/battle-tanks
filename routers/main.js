const express = require('express');
const router = express.Router();
const path = require('path');

const cntrlIndex = require('../controllers/index');
const cntrlPlay = require('../controllers/play');
const cntrlUser = require('../controllers/user');
const cntrlNoPage = require('../controllers/noPage');

/**
 * API keys and Passport configuration.
 */
const passportConfig = require('../config/passport');

router.use((req, res, next) => {
  next();
});

router.get('/index', cntrlIndex.index);
router.get('/play', passportConfig.isAuthenticated, cntrlPlay.getPlay);

router.get('/signin', cntrlUser.getSignin);
router.post('/signin', cntrlUser.postSignin);
router.get('/signout', cntrlUser.getSignOut);

router.get('/signup', cntrlUser.getSignUp);
router.post('/signup', cntrlUser.postSignUp);

router.get('/*', cntrlNoPage.noPage);

module.exports = router;
