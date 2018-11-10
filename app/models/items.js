var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var itemsSchema   = new Schema({
    item: String,
    quantity: String,
    price: String,
    tax: String
});

module.exports = mongoose.model('items', itemsSchema);
