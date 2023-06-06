import React from "react";
import "./card.css";

function Card({username, image}){
    return(
        <div className="card1">
            <h1 className="username">{username}</h1>
            <img 
            style={{ width: '200px', height: "200px" }}
            src={image} 
            alt="error" />
            
        </div>
      );
}

export default Card