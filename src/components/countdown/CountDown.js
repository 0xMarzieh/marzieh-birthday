import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CountDown.css";


const CountDown = () => {

    const [counter, setCounter] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        let timer;
        if (counter === 0) {
            navigate("/hbd");
        } else {
            timer = setInterval(() =>
                setCounter(prev => prev - 1)
            , 1000);
        }
        return () => clearInterval(timer);
    }, [counter, navigate]);

    return (
        <h1 className="countdown">{counter}</h1>
    );
};


export default CountDown;