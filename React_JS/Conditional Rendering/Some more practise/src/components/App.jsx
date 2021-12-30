import React from "react";
import Intro from "./Intro";

var userIsRegistered =true;

function App() {
  return (
    <div className="container">
      <Intro isRegistered={userIsRegistered} />
    </div>
  );
}

export default App;
