exports.index = (req, res) => {
  res.render('index', {
    title: 'Battle',
    user: req.user
  });
};;
