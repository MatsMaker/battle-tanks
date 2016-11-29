const passport = require('passport');
const User = require('../models/User');

exports.getSignUp = (req, res) => {
  res.render('signup', {pageTitle: 'Sign up'});
}

exports.postSignUp = (req, res, next) => {
  const user = new User({
    email: req.body.email,
    password: req.body.password,
    profile: {
      name: req.body.name
    }
  });
  user.save().then(user => {
    res.redirect('/');
  }).catch(error => {
    res.render('signup', {pageTitle: 'Sign up'});
  });
}
