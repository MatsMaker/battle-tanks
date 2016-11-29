const passport = require('passport');
require('../config/passport');
const User = require('../models/User');

exports.getSignin = (req, res) => {
  res.render('signin', {pageTitle: 'Sign in'});
}

exports.postSignin = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      // req.flash('message', 'info');
      return res.redirect('/signin');
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      // req.flash('success', { msg: 'Success! You are logged in.' });
      res.redirect(req.session.returnTo || '/');
    });
  })(req, res, next);
}

exports.getSignOut = (req, res, next) => {
  req.logout();
  res.redirect('/');
}

exports.getSignUp = (req, res) => {
  res.render('signup', {pageTitle: 'Sign up'});
}

exports.postSignUp = (req, res, next) => {
  User.findOne({email: req.body.email}).then(user => {
    const newUser = new User({
      email: req.body.email,
      password: req.body.password,
      profile: {
        name: req.body.name
      }
    });
    newUser.save().then(user => {
      res.redirect('/');
    }).catch(error => {
      res.render('signup', {pageTitle: 'Sign up'});
    });
  }).catch(error => {
    res.render('signup', {pageTitle: 'Sign up'});
  });
}
