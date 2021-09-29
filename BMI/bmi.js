const express=require("express");
const app=express();
const bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname + "/index.html");
});
app.post("/",function(req,res){
    var h=parseFloat(req.body.Height);
    var w=parseFloat(req.body.Weight);
    var bmi=(w/((h*h))).toFixed(2);
    if(bmi<18.6)
    res.send("BMI: "+bmi+" ->Underweight");
    else if(bmi===18.6)
    res.send("BMI: "+bmi+" ->Normal");
    else
    res.send("BMI: "+bmi+" ->Overweight");
});
app.listen(3000,function(){
  console.log("The server is running at port number 3000");
});