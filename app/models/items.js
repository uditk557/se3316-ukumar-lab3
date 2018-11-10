var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var itemsSchema   = new Schema({
    name: String,
    quantity: String,
    cost: String,
    tax: String
});

module.exports = mongoose.model('items', itemsSchema);
