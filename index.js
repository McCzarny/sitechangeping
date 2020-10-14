const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const db = require('./config/db');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, (err, database) => {
    if (err)
        return console.log(err)
    const db = database.db("sitechangeping-api")
    require('./routes')(app, db);
    const port = 8000;
    app.listen(port, () => { console.log('We are live on ' + port); });
 })
