/*
import animals,{useAnimals} from "./data";

//console.log(animals);
//Destructuring Arrays 
const [cat,dog]=animals;

const [animal,makeSound]=useAnimals(cat);

console.log(animal);
makeSound();

//console.log(cat);
//Destructuring Objects
//const {name:catName,sound:catSound}=cat;

//console.log(catSound);
 //Nested objects
 //const {name,sound,feedingRequirements: {food,water}}=cat;
 //console.log(feedingRequirements);
 //console.log(food);
*/
//Now after all that lets complete the challenge
 import React from "react";
 import ReactDOM from "react-dom";
 import cars from "./practice";
 
 const [honda,tesla]=cars;
 const {speedStats: {topSpeed:hondaTopSpeed}}=honda;
 const {speedStats: {topSpeed:teslaTopSpeed}}=tesla;
 
 const {coloursByPopularity:[hondaTopColour]}=honda;
 const {coloursByPopularity:[teslaTopColour]}=honda;
 ReactDOM.render(
   <table>
     <tr>
       <th>Brand</th>
       <th>Top Speed</th>
       <th>Top Color</th>
     </tr>
     <tr>
       <td>{tesla.model}</td>
       <td>{teslaTopSpeed}</td>
       <td>{teslaTopColour}</td>
     </tr>
     <tr>
       <td>{honda.model}</td>
       <td>{hondaTopSpeed}</td>
       <td>{hondaTopColour}</td>
     </tr>
   </table>,
   document.getElementById("root")
 );
