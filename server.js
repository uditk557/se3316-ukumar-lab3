// This is the server for the back end of the shopping website

const express = require('express');
const app = express();
const bodyParser = require ('body-parser');
const MongoClient = require('mongodb').MongoClient; var db; // Mongodb variables


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var port = process.env.PORT || 557;

var router = express.Router();

// this is to send the data 
router.get('/' ,  (req,res) => {
    res.json({message: 'hooray! welcome to site'});
});

app.use('/api' , router);

app.listen(port);
console.log ('Conneccted');







































































































/*MongoClient.connect('mongodb://ukumar:Phone6478084879@ds155203.mlab.com:55203/onlinestore' , (err, client) => {
    if (err) return console.log(err);
    db = client.db('onlinestore');

    app.listen(557);
    console.log('Test 1');
    app.use(bodyParser.urlencoded({extended: true}));
    app.get('/', (req, res) => {
        res.sendFile('/Users/ukumar/Documents/GitHub/se3316-ukumar-lab3' + '/lab2.html');
    });

    app.post('/choice' , (req,res) => {
        db.collection('items').insertOne(req.body) });
        console.log('Saved');

    app.post('/choice' , (req,res) => {
       db.collection('items').save(req.body, (err, results)=> {
        if (err) return console.log(err);
        
        console.log('saved');
        res.send(req.body);
        console.log(req.body);
        res.redirect('/');
    });


    
    app.get('/', (req, res) => {
        var cursor = db.collection('items').find();
        console.log(res.body);
    });
    app.get('/', (req,res) =>{
        db.collection.find().forEach(printjson);
    });

    app.set('view engine', 'ejs');
    app.get('/', (req, res) =>{
        db.collection('items').find().toArray((err, result) => {
            if (err) return console.log(err);

            res.render('index.ejs', {items: resutl});
            console.log(results);
        });
    });

    app.get('/remove', (req,res) => {
        db.collection.delete
   });



});*/
