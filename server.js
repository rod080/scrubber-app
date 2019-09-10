var express = require('express'); 
var exphbs = require('express-handlebars');
var mongoose = require('mongoose');
var cheerio = require('cheerio');
var axios = require('axios');
var app = express();
var path = require('path');


var db = require("./models");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

// mongoose.connect("mongodb//localhost/scrubberdb", { useNewUrlParser: true});

mongoose.connect("mongodb://localhost:27017/scrubberdb", { useNewUrlParser: true });

// MongoClient.connect("mongod://localhost:27017/scrubberdb",{ useNewUrlParser: true })

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect(MONGODB_URI);

// the followin g 2 lines of code are whats neccessaey to get handlebars started
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


// ------------------copied from github-----------------
// 

//-------------------copied fomr github-----------------
 

// ---------------routing---------------
app.get('/', function(req, res) {
    res.render('index');
});
// ---------------routing---------------




app.listen(3000, function() {
    console.log("App running on port 3000!");
  });