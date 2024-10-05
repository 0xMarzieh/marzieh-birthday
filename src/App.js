import React from "react";
import { Routes, Route } from "react-router-dom";
import Timer from "./pages/timer/Timer";
import HBD from "./pages/hbd/HBD";
import "./App.css";


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Timer />} />
            <Route path="/hbd" element={<HBD />} />
        </Routes>
    );
};


export default App;