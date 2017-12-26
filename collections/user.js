var mongoose = require('mongoose');
var db = mongoose.createConnection('localhost', 'superbowl');

var schema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    shop: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
});
var User = db.model('User', schema);

module.exports = User;