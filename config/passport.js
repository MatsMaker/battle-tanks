const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');
/**
 * Sign in using Email and Password.
 */
passport.use(new LocalStrategy({
  usernameField: 'email'
}, (email, done) => {
  User.findOne({
    email: email.toLowerCase()
  }, (err, user) => {
    if (err) {
      return done(err);
    }
    if (!user) {
      return done(null, false, {msg: `Email ${email} not found.`});
    }
    return done(null, user);
  });
}));

/**
 * Login Required middleware.
 */
exports.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/signin');
};
