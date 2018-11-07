// This is the server for the back end of the shopping website

const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient; var db; // Mongodb variables

MongoClient.connect('mongodb://ukumar:Phone6478084879@ds155203.mlab.com:55203/onlinestore' , (err, client) => {
    if (err) return console.log(err);
    db = client.db('onlinestore');

    app.listen(557);
    console.log('Test 1');

    app.get('/', (req, res) => {
        res.sendFile('/Users/ukumar/Desktop/se3316-ukumar-lab2-master/se3316-ukumar-lab2-master' + '/lab2.html');
    });

    //app.post('')




































});
