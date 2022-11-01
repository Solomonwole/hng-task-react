import React from "react";
import slack from "../slack.svg";
import github from "../github.svg";
import "./Social.css";

function Social() {
  return (
    <div className="social">
      <a href="/">
        <img src={slack} alt="Slack" />
      </a>
      <a href="/">
        <img src={github} alt="Github" />
      </a>
    </div>
  );
}

export default Social;
