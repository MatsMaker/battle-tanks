const passportConfig = require('../config/passport');
const User = require('../models/User');

exports.getSignin = (req, res) => {
  res.render('signin', {pageTitle: 'Sign in'});
}

exports.postSignin = (req, res) => {

  passport.authenticate('local', (err, user, info) => {
    if (err) { return next(err); }
    if (!user) {
      req.flash('errors', info);
      return res.redirect('/login');
    }
    req.logIn(user, (err) => {
      if (err) { return next(err); }
      req.flash('success', { msg: 'Success! You are logged in.' });
      res.redirect(req.session.returnTo || '/');
    });
  })(req, res, next);

}
