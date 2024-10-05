import React, { useState } from "react";
import CountDown from "../../components/countdown/CountDown";
import "./Timer.css";


const Timer = () => {

    const [showTimer, setShowTimer] = useState(false);

    return (
        <div className="timer-container">
            {
                showTimer ?
                <CountDown /> :
                <button onClick={() => setShowTimer(true)}>
                    Click Here
                </button>
            }
        </div>
    );
};


export default Timer;