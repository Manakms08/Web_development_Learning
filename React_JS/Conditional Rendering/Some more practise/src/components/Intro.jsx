import React from "react";
import Input from "./input";
function Intro(prop) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {!prop.isRegistered && (
        <Input type="password" placeholder="Confirm Password" />
      )}

      <button type="submit">{prop.isRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Intro;
