const express = require('express');
const router = express.Router();
const path = require('path');
const passportConfig = require('../config/passport');

const cntrlIndex = require('../controllers/index');
const cntrlClient = require('../controllers/client');
const cntrlSignin = require('../controllers/signin');
const cntrlNoPage = require('../controllers/noPage');

router.use((req, res, next) => {
  next();
});

router.get('/', cntrlIndex.index);
router.get('/play', /*passportConfig.isAuthenticated,*/ cntrlClient.getPlay);

router.get('/signin', cntrlSignin.getSignin);
router.post('/signin', cntrlSignin.postSignin);

router.get('/*', cntrlNoPage.noPage);

module.exports = router;
