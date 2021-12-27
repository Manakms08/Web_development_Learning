//var numbers = [3, 56, 2, 48, 5];
/*MAP:

const new_numbers=numbers.map(function (x){
    return x*2;//We have to enter another function to the map function bracket
});

console.log(new_numbers)*/

/*Filter:

const new_number=numbers.filter(function (x){
    return x>10;
});
console.log(new_number);*/

/*Reduce:
 
var newNumber=numbers.reduce(function(accumulator,currentNumber){
    console.log("accumulator = "+accumulator);
    console.log("currentNumber = "+currentNumber);
    return accumulator+currentNumber;  
})

console.log(newNumber)*/

/*Find:
var newNumber=numbers.find(function(num){
    return num>10;
})
console.log(newNumber);*/

/*FindIndex:
var newNumber=numbers.findIndex(function(num){ 
    return num>10;
})
console.log(newNumber);*/


//Map -Create a new array by doing something with each item in an array.

//Filter - Create a new array by keeping the items that return true.

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.


import emojipedia from "./emojipedia";

var emojiPedia=emojipedia.map(function (emojiEntry){
   return emojiEntry.meaning.substring(0,100);
})

console.log(emojiPedia);