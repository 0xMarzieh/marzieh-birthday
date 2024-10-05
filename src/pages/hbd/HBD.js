import React, { useEffect } from "react";
import Confetti from "react-confetti";
import gsap from "gsap";
import Cake from "../../components/cake/Cake";
import "./HBD.css";
import img0 from "../../images/2.jpg";
import img1 from "../../images/3.jpg";
import img2 from "../../images/4.jpg";
import img3 from "../../images/5.jpg";
import img4 from "../../images/12.jpg";
import img5 from "../../images/7.jpg";
import img6 from "../../images/8.jpg";
import img7 from "../../images/13.jpg";
import img8 from "../../images/10.jpg";
import img9 from "../../images/11.jpg";


const HBD = () => {

    useEffect(() => {
        const handleTransition = () => {
            gsap.to(".have-delay", {
                duration: 5,
                delay: 8,
                opacity: 1
            });
        }
        handleTransition();
    }, []);

    return (
        <div className="hbd-container">
            <Cake />
            <div className="have-delay">
                <Confetti
                    numberOfPieces={100}
                    gravity={0.05}
                />
                <figure className="swing swing0">
                    <img src={img0} alt="img0" width="100" />
                </figure>
                <figure className="swing swing1">
                    <img src={img1} alt="img1" width="100" />
                </figure>
                <figure className="swing swing2">
                    <img src={img7} alt="img2" width="100" />
                </figure>
                <figure className="swing swing3">
                    <img src={img3} alt="img3" width="100" />
                </figure>
                <figure className="swing swing4">
                    <img src={img4} alt="img4" width="100" />
                </figure>
                <figure className="swing swing5">
                    <img src={img5} alt="img5" width="100" />
                </figure>
                <figure className="swing swing6">
                    <img src={img6} alt="img6" width="100" />
                </figure>
                <figure className="swing swing7">
                    <img src={img2} alt="img7" width="100" />
                </figure>
                <figure className="swing swing8">
                    <img src={img8} alt="img8" width="100" />
                </figure>
                <figure className="swing swing9">
                    <img src={img9} alt="img9" width="100" />
                </figure>
            </div>
        </div>
    );
};


export default HBD;