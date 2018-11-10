var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var items = require ('/Users/ukumar/Documents/GitHub/se3316-ukumar-lab3/app/models' + '/items.js');

mongoose.connect('mongodb://ukumar:Phone6478084879@ds155203.mlab.com:55203/onlinestore');

var port = 8080;

app.get('/' , (req, res) =>{
    res.send("Test Complete");
});