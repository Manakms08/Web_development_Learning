const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB", { useNewUrlParser: true })
.then(()=> console.log("Connection successful..."))
.catch((err)=>console.log(err));

const wiki= new mongoose.Schema({
    title:String,
    content:String 
});
const Article=new mongoose.model("Article",wiki);
//Route chaining
//Request targeting all article
app.route("/articles")
.get(function(req,res){
    
    Article.find(function(err,found_articles){
        if(!err)
        res.send(found_articles);
        else
        res.send(err);
    });
  })
.post(function(req,res){
  
    const newArticle=new Article({
        title: req.body.title,
        content: req.body.content
    });
    newArticle.save(function(err){
        if(!err)
        res.send("Successfully added to database");
        else
        res.send(err);
    });
  })
.delete(function(req,res){
    Article.deleteMany(function(err){
        if(!err)
        res.send("Successfully deleted from database");
        else
        res.send(err);
    });
});
//Request targeting specific found_articles

app.route("/articles/:articleTitle")
.get(function(req,res){

    Article.findOne({title:  req.params.articleTitle},function(err,foundArticle){
     if(foundArticle)
     res.send(foundArticle);
     else
     res.send("No articles match found");
    })
})
.put(function(req,res){
    Article.replaceOne(
        {title: req.params.articleTitle},
        {title: req.body.title,content: req.body.content},
        {overwrite: true},
        function(err){ 
            if(!err)
            res.send("Success");
            else
            res.send("Match not found");
        }
    )
})
.patch(function(req,res){
    Article.updateOne(
        {title: req.params.articleTitle},
        {$set: req.body},
        function(err) {
          if(!err)
          res.send("Success in updating");
          else
          res.send("Failure");
        }
    )
})
.delete(function(req,res){
    Article.deleteOne(
        {title: req.params.articleTitle},
        function(err){ 
            if(!err)
            res.send("Successfully deleted");
            else
            res.send("Failure"); 
        }
    )
})
app.listen(3000, function() {
  console.log("Server started on port 3000");
});

