
import React, { useState } from "react";
import "./bulb.css";


const Bulb = () => {
    
    
    const [bulbOn, setBulbOn] = useState(false);
    
    
  return (
        <>
        <div className={bulbOn ? "bulb-on" : "bulb-off"}/> 
        <button onClick={() => setBulbOn(!bulbOn)}> {bulbOn ? "off" : "on"} </button>
        
   </>
  );
}


export default Bulb;