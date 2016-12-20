const _ = require('underscore');

exports.getPlay = (req, res) => {
  res.render('game', {pageTitle: 'Tank'});
};
