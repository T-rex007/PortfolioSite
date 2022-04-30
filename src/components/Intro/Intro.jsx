import React from "react";
import "./intro.scss";
import { init} from 'ityped';
import { useRef, useEffect } from "react";

function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
          showCursor: false,
          backDelay: 1500,
          backSpeed: 60,
          strings: ["Machine Learning Developer","Electrical and Computer Engineer","Freelancer", "Entrepreneur"],
        });

    },[])
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          {/* <img src="assets\IMG_20190309_173250.png" alt="" /> */}
          <span className="initials">TC</span>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Tyrel Cadogan</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
export default Intro;
