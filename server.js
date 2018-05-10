var express = require('express'); //requires express
var app = express();              //creates an express object we can use.
var bodyParser = require('body-parser'); //reuires body parser

//require our mongoose configurations (Setting up the database).


var path = require('path'); 
var session = require('express-session');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client/dist/client')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './client/views'));
// Setting our View Engine set to EJS
// app.set('view engine', 'ejs');
app.use(session({secret: "Shh, its a secret!"}));

//This includes all of our routes!
require('./server/config/routes.js')(app);

app.listen(8000, function() {
    console.log("listening on port 8000");
})