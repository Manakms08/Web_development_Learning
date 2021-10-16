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
const createDocument= async()=>{
try{
const doc1 = new Fr({
    name: "Apple",
    score: 8,
    review: "Awesome"
});
const doc2 = new Fr({
    name: "Orange",
    score: 6,
    review: "Sour"
});
const doc3 = new Fr({
    name: "Banana",
    score: 9,
    review: "Magnificent"
});
const result= await Fr.insertMany([doc1,doc2,doc3]);
console.log(result);
}catch(err){
    console.log(err);
}
}
//createDocument();
//Reading
/*const getDocument=async()=>{
try{
   const v= await Fr.find();
   console.log(v);
   }catch(err){
       console.log(err);
   }
}
getDocument();*/
const gg=async()=>{
    try{
     const a=await Fr.find({score: {$lt: 9}}).select({name:1});
     console.log(a);
    }catch(err){
        console.log(err);
    }
}
gg();
const func=async()=>{
    try{
     const a=await Fr.find({score: {$in:[9,8]}});
     console.log(a);
    }catch(err){
        console.log(err);
    }
}
func();

