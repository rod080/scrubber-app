var express = require('express'); 
var exhbs = require('express-handlebars');
var mongoose = require('mongoose');
var cheerio = require('cheerio');
var axios = require('axios');
var app = express();
var path = require('path');


app.use(express.urlencoded({extended:true}));
app.use(express.json());

// mongoose.connect("mongodb//localhost/scrubberdb", { useNewUrlParser: true});

mongoose.connect("mongodb://localhost:27017/scrubberdb", { useNewUrlParser: true });

// MongoClient.connect("mongod://localhost:27017/scrubberdb",{ useNewUrlParser: true })

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect(MONGODB_URI);


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});




app.listen(3000, function() {
    console.log("App running on port 3000!");
  });