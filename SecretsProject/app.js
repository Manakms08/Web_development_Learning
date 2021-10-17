require('dotenv').config();
const express=require('express');
const bodyParser=require('body-parser');
const ejs=require('ejs');
const mongoose=require('mongoose');
const validator=require('validator');
const encrypt=require('mongoose-encryption');
const app=express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost:27017/userDB", { useNewUrlParser: true })
.then(()=> console.log("Connection successful..."))
.catch((err)=>console.log(err));

const userSchema= new mongoose.Schema({
      email: {
          type: String, 
          required:true, 
          validate(value){
            if(!validator.isEmail(value))    //Npm Validator
            throw new Error("Email is invalid");
           }},
      password: {
          type: String, 
          required: true, 
      }
    
});


userSchema.plugin(encrypt, { secret: process.env.SECRET , encryptedFields: ['password']});
const User= new mongoose.model("User",userSchema);




app.get("/",function(req,res){
    res.render("home");
});
app.get("/login",function(req,res){
    res.render("login");
});
app.get("/register",function(req,res){
    res.render("register");
});

app.post("/register",function(req,res){
    const newUser= new User({
        email: req.body.username,
        password: req.body.password
    });
    newUser.save(function(err){
        if(!err)
        res.render("secrets");
        else
        console.log(err);
    });
});
app.post("/login",function(req,res){
    const username=req.body.username;
    const pass=req.body.password;

    User.find({email: username,password: pass},function(err,foundUser){
        if(err)
        console.log(err);
        else
        {
            if(foundUser){
                res.render("secrets");
            }
            else{
                res.redirect("/login");            
            }
        }
    })
});
app.listen(3000,function(){
    console.log("The server is running at port 3000");
});