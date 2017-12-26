var express = require('express'),
    app = express(),
    _ = require('underscore'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(morgan('dev'));

mongoose.Promise = global.Promise; //ES6 promises
mongoose.connect('mongodb://localhost/superbowl', {useMongoClient: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// ---------------------------- TO REMOVE
db.dropDatabase(); //for dev purposes
// ---------------------------- BEFORE PROD

app.get('/', function(req, res){
    res.sendStatus(200);
});

app.listen(3005, function(){
    console.log('Server started listening on port 3005...');
});