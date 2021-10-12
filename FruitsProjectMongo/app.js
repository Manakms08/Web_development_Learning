const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true })
.then(()=> console.log("Connection successful..."))
.catch((err)=>console.log(err));

const fruits= new mongoose.Schema({
    name: String,
    score: Number,
    review: String,
    
});

const Fr= new mongoose.model("fruit",fruits);

const doc = new Fr({
    name: "Apple",
    score: 8,
    review: "Awesome"
});
