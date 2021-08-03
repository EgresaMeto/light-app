
import React, { useState } from "react";
import "./bulb.css";


<<<<<<< HEAD
const Bulb = () => {
    
    
    const [bulbOn, setBulbOn] = useState(false);
    
    
  return (
        <>
        <div className={bulbOn ? "bulb-on" : "bulb-off"}/> 
        <button onClick={() => setBulbOn(!bulbOn)}> {bulbOn ? "off" : "on"} </button>
        
   </>
=======
/*
  use arrow function for class components

  const Bulb = () => {
    code goes here
  } 
*/

// images such as .svg .jpg .png etc belong on a folder called images inside the ./public directory of the project
function Bulb() {
  // "on" as the name for the state is not descriptive enough use something like this bulbState 
  // read clean code to have a better understanding on how to name variables and functions
  const [on, setOn] = useState(false);

  //redundant function
  // just use setOn directly on the onClick event
  /*
      onClick={()=> setOn(!on)}
  */
  const lightSwitch = () => setOn(on => !on);

  return (
    <>
      <div className={on ? "bulb-on" : "bulb-off"} />
      {/*
        button name should represent the state that the bulb will go into  ex: if bulb is on button name should be off 
        
      */}
      <button onClick={lightSwitch}>On/off</button>
    </>
>>>>>>> e7855e7543fd83aa226edae1aa5856b9dbcdea84
  );
}


export default Bulb;