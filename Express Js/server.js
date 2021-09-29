const express=require("express");
const app=express();

app.get("/",function(req,res){ 
      res.send("<h1>Hello</h1>");
});
app.get("/contact",function(req,res){ 
    res.send("Contact me at manaksinha@gmail.com");
});
app.get("/about",function(req,res){ 
    res.send("Hey there! I am Manak Sinha.Nice to meet ya");
});
app.get("/message",function(req,res){ 
    res.send("Btech CSE ");
});
app.listen(3000,function(){
    console.log("Server started on port 3000");
});
