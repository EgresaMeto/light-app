
import React, { useState } from "react";
import "./bulb.css";



function Bulb() {
  const [on, setOn] = useState(false);

  const lightSwitch = () => setOn(on => !on);

  return (
    <>
      <div className={on ? "bulb-on" : "bulb-off"} />
      <button onClick={lightSwitch}>On/off</button>
    </>
  );
}


export default Bulb;