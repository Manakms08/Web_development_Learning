import React from "react";
import ReactDOM from "react-dom";

function Card(props)
{
   return <div className="my-style">
    <h2>{props.name}</h2>
    <img
      src={props.img}
      alt="avatar_img"/>
    <p>{props.tel}</p>
    <p>{props.email}</p>
   </div>
}
ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card 
    name="Beyonce" 
    img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" 
    tel="+123 456 789" 
    email="b@beyonce.com"
    />
    <Card name="Dai"
    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpbVFENc5dvt13VUI8FJzmSSVN6VPF69aZF1_cPD407DiSxTLdiaky_IUfTFgDlkcWKiw&usqp=CAU"
    tel="+123 895 869"
    email="D@dai.com"
    />
  </div>,
  document.getElementById("root")
);
