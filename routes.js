var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
app.route('/sites')
  .get(function (req, res) {
    const details = {"_id": new ObjectID(req.body.id) }
    console.log(details)

    db.collection('sites').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      }
    })
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
