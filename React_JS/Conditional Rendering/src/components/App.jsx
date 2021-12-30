import React from "react";
import Login from "./login";
var isLoggedIn=false;
//&& in JS and ? in JS displayed in this file
const currentTime=new Date().getHours();

function App() {
  return (
    <div className="container">
 {isLoggedIn===true?<h1>Hello</h1>:<Login/>
 
  //currentTime>12?<h1>Why are you still working</h1>:null
 // currentTime>12 && <h1>Why are you still working</h1>
 }</div>
  );
 
}
export default App;
