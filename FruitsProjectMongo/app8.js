const mongoose = require('mongoose');
const validator=require('validator');
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true })
.then(()=> console.log("Connection successful..."))
.catch((err)=>console.log(err));

const fruits= new mongoose.Schema({
    name: { 
        type: String, 
        required:true, 
        unique:true, 
        lowercase:true,
        trim:true
    },
    score: {
        type:Number, 
        required:true, 
        //custom validator
        validate(value){
          if(value<0) throw new Error("Negative value not allowed");
        }
    },
    email: { 
       type:String, 
       required: true, 
       unique: true, 
       validate(value){
        if(!validator.isEmail(value))    //Npm Validator
        throw new Error("Email is invalid");
       }
    },
    review: String,
    
});
const Fr= new mongoose.model("fruit",fruits);
const createDocument= async()=>{
try{
const doc1 = new Fr({
    name: "Guava  ",
    score: 8,
    email:"gv@mail.com",
    review: "Awesome"
});
const doc2 = new Fr({
    name: "   Mango",
    score: 6,
    email:"mg@mail.com",
    review: "Sour"
});

const result= await Fr.insertMany([doc1,doc2]);
console.log(result);
}catch(err){
    console.log(err);
}
}
createDocument();
//Reading
/*const getDocument=async()=>{
try{
   const v= await Fr.find();
   console.log(v);
   }catch(err){
       console.log(err);
   }
}
getDocument();
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
const func=async()=>{
    try{
     const a=await Fr.find({$or: [{score: 8},{name: "Banana"}]}).countDocuments();
     console.log(a);
    }catch(err){
        console.log(err);
    }
}
func();
const f=async()=>{
    try{
     const a=await Fr.find().select({name: 1}).sort({name: 1});
     console.log(a);
    }catch(err){
        console.log(err);
    }
}
f();
const updoc=async(_id)=>{
  try{
  const result= await  Fr.updateOne({_id},{
      $set: {score: 7}
  });
  console.log(result);
}catch(err)
  { 
      console.log(err);
  }
}
updoc("6165db8dd4aadc1559e8c7f9");

const deleteDoc=async(_id)=>{
    try{
        const result= await Fr.deleteOne({_id});
        console.log(result);
    }catch(err)
    { 
        console.log(err);
    }
}


deleteDoc("6165db8dd4aadc1559e8c7fa");*/

//Validation 

