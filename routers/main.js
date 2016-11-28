const express = require('express');
const router = express.Router();
const path = require('path');

const cntrlIndex = require('../controllers/index');

router.use((req, res, next) => {
  next();
});

router.get('/', (req, res, next) => {
  cntrlIndex.index(req, res).then((data) => {
    res.render('index', data);
  });
});

router.get('/signin', (req, res, next) => {
  cntrlIndex.index(req, res).then((data) => {
    if (req.session.user) {
      data.userName = req.session.user.name;
      res.render('signin', data);
    } else {
      res.redirect('/');
    }
  });
});

router.get('/signup/:name', (req, res, next) => {
  let name = req.params.name;
  req.session.user = {
    name: name
  };
  cntrlIndex.index(req, res).then((data) => {
    data.userName = name;
    res.render('signin', data);
  });
});

router.get('/*', (req, res, next) => {
  res.render('404', {});
});

module.exports = router;
