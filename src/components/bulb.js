
import React, { useState } from "react";
import "./bulb.css";

/*
  inside the ./components create a another component with 4x4 bulbs shaped like a square. 
  when you click the switch only the bulbs on the odd position  should be turned on ex: 1 3 5 etc 
  hint: use an array with objects to store the data [{state: true}]
  then map this array 
  no logic should be in the bulb.js component just pas the state as a prop and the onClick function 
*/
const Bulb = (props) => {
    const [bulbOn, setBulbOn] = useState(false);
    
  return (
        <>
        <div className={bulbOn ? "bulb-on" : "bulb-off"}/> 
        <button onClick={() => setBulbOn(!bulbOn)}> {bulbOn ? "off" : "on"} </button>
        
   </>
  );
}


export default Bulb;