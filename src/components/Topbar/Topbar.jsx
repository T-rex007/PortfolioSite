import React from "react";
import "./topbar.scss";
import {Person,Mail} from "@material-ui/icons"

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Tyrel Cadogan.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+1(868)-478-6362</span>
          </div>

          <div className="itemContainer">
            <Mail className="mail" />
            <span>shaqc777@gmail.com</span>
          </div>
          <div className="right">
            <div className="hamburger">
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}