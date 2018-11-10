var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var items = require ('./app/models/items');

mongoose.connect('mongodb://ukumar:Phone6478084879@ds155203.mlab.com:55203/onlinestore');



app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.use((req, res, next) => {
    console.log('test 1');
    next();
});
router.get('/', function(req, res) {
    //res.sendFile('/Users/ukumar/Documents/GitHub/se3316-ukumar-lab3' + '/front.html');
    res.json({message: 'hooray! welcome to our api!'});
});
router.route('/items')

    .post(function(req,res){
    var item = new items();
    item.name = req.body.name;

    item.save(function(err) {
        if(err) {
        res.setEncoding(err);
        };
        res.json({message:'Item stord'});
    });
});

router.route('/items')

.get(function(req,res){
    items.find(function(err, items) {
        if (err) {
            res.send(err);
        };
        res.json(items);
    });
});






app.use ('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);