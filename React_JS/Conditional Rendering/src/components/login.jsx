import React from "react";
import Input from "./input";
function Login(){
    return <form className="form">
    <Input 
      type="text"
      placeholder="Username"
    />
    <Input 
    type="text"
    placeholder="Password"/>
    <button type="submit">Login</button>
  </form>
}
export default Login;

//<input type="password" placeholder="Password" />