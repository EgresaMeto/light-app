
import React, { useState } from "react";
import "./BULB.css";


const Bulb = () => {
    
    
  const [bulbOn, setBulbOn] = useState(false);
  
  return (
    <>
      
      <div className={bulbOn ? "bulb-on" : "bulb-off"} />
      <button onClick={() => setBulbOn(!bulbOn)}> {bulbOn ? "OFF" : "ON"} </button>
      
   </>
  );
}


export default Bulb;