import React, { useState } from "react";
import Bulb from "./BULB";
import "./BULB.css";

const BulbArray = () => {
   
    const [array, setArray] = useState([{ state: false }, { state: false }, { state: false }, { state: false }, { state: false }, { state: false }, { state: false }, { state: false }, { state: false }, { state: false }, { state: false }, { state: false }, { state: false }, { state: false }, { state: false }, { state: false },]);
    const [switchState, setSwitchState] = useState(false);
    const turnOnOddBulbs = (value) => {
        let arr = array;
        for (var i = 0; i < array.length; i++) {
            if ((i % 2) !== 0) {
                arr[i].state = value;
            }
        }
        setArray([...arr])
        setSwitchState(value)
    }

    return (<div>
        <div className="bulbs-wrapper">
        {array.map((arr) => {
            return (
                <Bulb
                    state={arr.state}
                />
            )
        })}
     </div>
            
        <button onClick={()=>{turnOnOddBulbs(!switchState)}} > {switchState ? "off" : "on"} </button>

        </div>
    );
}

export default BulbArray;
