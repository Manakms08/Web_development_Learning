const express= require("express");
const app=express();
const bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.get("/calculator",function(req,res){
    res.sendFile(__dirname + "/index.html");
});
app.post("/",function(req,res){
     var n1=(Number)(req.body.Number1);
     var n2=(Number)(req.body.Number2);
     var result=n1+n2;
     res.send("The addition result is " +result);
});
app.listen(3000,function(){
    console.log("Server started at port number 3000");
});