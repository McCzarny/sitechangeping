module.exports = function(app, db) {
app.route('/sites')
  .get(function (req, res) {
    res.send(db.collection('sites')[0])
  })
  .post(function (req, res) {
    const site = { uri: req.body.uri, interval: req.body.interval}
    db.collection('sites').insert(site, (err, results) => {})
    res.send(`Site added, uri: ${req.body.uri}, interval: ${req.body.interval}`)
  })
  .put(function (req, res) {
    res.send('Update the site')
  })
};
