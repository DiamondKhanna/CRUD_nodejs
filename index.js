var express=require("express");
var bodyParser=require("body-parser");
var routes=require("./routes/routes.js");
var app=express();

var mongoose=require('mongoose');
var mongoDB='mongodb://localhost/myNewDatabase';
mongoose.connect(mongoDB);
mongoose.Promise=global.Promise;
var db=mongoose.connection;
db.on('error',console.error.bind(console,'MONGODB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

routes(app);

var server=app.listen(9000,function()
{
    console.log('application is running on port:',server.address().port);
})