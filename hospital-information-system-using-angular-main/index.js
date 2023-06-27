var express=require('express');
var mongoose=require('mongoose'); 
const User = require('./models/User');
var app=express();
var User=require('./models/User')
var bodyparser =require('body-parser');
var db = mongoose.connect('mongodb://localhost:27017/meanAuthAngular', function(err,response){ 
    if(err) console.log("there is an error in connecting with db");
    console.log("connection is successfull");
})
app.set('port',process.env.port||3000);
app.user(bodyparser.json());
app.get('/',(req,res) =>{
    res.send("hello");
})
app.post('/login',(req,res)=>{
    })
app.listen(app.get('port'),function(err,response){
    console.log("server is running on port",app.get('port'));
})
app.post('/register',(req,res)=>{
    console.log(req.body);
var firstname=req.body.firstname;
var lastname=req.body.lastname;
var email=req.body.email;
var password=req.body.password;
var user=new User();
user.firstname=firstname;
user.lastname=lastname;
user.email=email;
user.password=password;
user.save((error,result)=>{
    if(err)  {
        console.log("There is an error in adding user to database");
        res.sendStatus(500);
    }
    res.sendStatus()
})
})
