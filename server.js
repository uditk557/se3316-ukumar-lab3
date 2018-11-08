// This is the server for the back end of the shopping website

const express = require('express');
const app = express();
const bodyParser = require ('body-parser');
const MongoClient = require('mongodb').MongoClient; var db; // Mongodb variables

MongoClient.connect('mongodb://ukumar:Phone6478084879@ds155203.mlab.com:55203/onlinestore' , (err, client) => {
    if (err) return console.log(err);
    db = client.db('onlinestore');

    app.listen(557);
    console.log('Test 1');
    app.use(bodyParser.urlencoded({extended: true}));
    app.get('/', (req, res) => {
        res.sendFile('/Users/ukumar/Documents/GitHub/se3316-ukumar-lab3' + '/front.html');
    });

    

    app.post('/choice' , (req,res) => {
       db.collection('items').save(req.body, (err, results)=> {
        if (err) return console.log(err);
        
        console.log('saved');
        res.redirect('/');
    });


    });
});
