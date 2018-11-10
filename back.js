var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
var mongoose = require('mongoose');
var items = require ('/Users/ukumar/Documents/GitHub/se3316-ukumar-lab3/app/models' + '/items.js');

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
app.get("/items/update" , function(req,res){
    console.log("update");
});
app.put("/items/update", function(req,res){
    items.findOneAndUpdate({
        item: req.body.item
    },{$set: {quantity: req.body.title}});
    });

    app.delete("/item/delete", function(req,res) {
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
    app.get("/items/show" , function(req,res){
        console.log("show");
    });
    app.post("/items/show", (req,res) =>{
        res.json(items);
    });
