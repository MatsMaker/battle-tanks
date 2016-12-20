exports.noPage = (req, res) => {
  res.render('404', {
    pageTitle: 'No found page'
  });
}
