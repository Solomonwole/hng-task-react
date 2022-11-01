import React from "react";
import zuri from "../zuri.svg";
import i4g from "../i4g.png";
import "./FooterSection.css";

function FooterSection() {
  return (
    <>
      <div className="footer">
        <img src={zuri} alt="Zuri" />
        <p>HNG Internship 9 Frontend Task</p>
        <img src={i4g} alt="Zuri" />
      </div>
      <hr />
      <div className="footer-desktop">
        <img src={zuri} alt="Zuri" className="zuri"/>
        <p>HNG Internship 9 Frontend Task</p>
        <img src={i4g} alt="i4G" className="i4g"/>
      </div>
    </>
  );
}

export default FooterSection;
