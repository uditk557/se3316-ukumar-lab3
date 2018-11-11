var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
var mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
var items = require ('/Users/ukumar/Documents/GitHub/se3316-ukumar-lab3/app/models' + '/items.js');
var db;
MongoClient.connect('mongodb://ukumar:Phone6478084879@ds155203.mlab.com:55203/onlinestore', (err,client)=>{
    db = client.db('onlinestore');
}) ;
mongoose.connect('mongodb://ukumar:Phone6478084879@ds155203.mlab.com:55203/onlinestore');

var port = 800;
app.listen(port, () =>{
    console.log("Up and running ")
;});

app.get('/' , (req, res) =>{
    res.sendFile("/Users/ukumar/Documents/GitHub/se3316-ukumar-lab3" + "/front.html");
  console.log('Page reached');
});
app.post("/items", (req, res)=>{
    var myFruits = new items();
    myFruits.item = req.body.item;
    myFruits.quantity = req.body.quantity;
    myFruits.price = req.body.price;
    myFruits.tax = req.body.tax;
    myFruits.save()
    .then(fruit =>{
        res.redirect('/');
    }) ;
});
/*app.get("/items/update" , function(req,res){
    console.log("update");

});*/
app.get("/items/update", function(req,res){
    items.findOneAndUpdate({
        item: req.body.item
    },{$set: {quantity: req.body.title}});
        console.log("updated");
    });

    app.get("/item/delete", function(req,res) {
        
        items.findOneAndRemove({
           
            item: req.body.item
        }
        ,function(err, items) {
            if (err) {
                res.send("Error Deleting");
            } else {
                console.log("deleted");
               
            }
        })
    });
    app.get('/items/show', function(req,res) {
       var cursor = db.collection('items').find().toArray(function(err, results) {
        if (err) {

        }else {
            console.log("results");
            res.send(results);
        }
       });
    });
    /*app.get("/items/show" , function(req,res){
        console.log("show");
    });
    app.post("/items/show", (req,res) =>{
        res.json(items);
    });*/
