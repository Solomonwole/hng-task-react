import React from "react";
import profile_img from "../profile_img.png";
import "./Avatar.css";

function avatar() {
  return (
    <>
      <div className="profile-image">
        <img src={profile_img} alt="Profile Image" id="profile__img" />
      </div>
      <p className="username" id="twitter">
        <a href="https://twitter.com/tposhofficial" target='_blank'>SolomonWole</a>
      </p>
      <p className="username" id="slack" hidden>
        SolomonWole
      </p>
    </>
  );
}

export default avatar;
