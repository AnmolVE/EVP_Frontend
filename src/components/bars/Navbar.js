import React from "react";
import {
  NavbarStimulaiImage,
  NavbarUserImage,
} from "../../assets/images/images";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-left">
          <figure className="navbar-stimulai-img">
            <img src={NavbarStimulaiImage} alt="Stimulai" />
          </figure>
        </div>
        <div className="navbar-right">
          <figure className="navbar-user-img">
            <img src={NavbarUserImage} alt="User" />
          </figure>
          <p>Login</p>
        </div>
      </div>
    </>
  );
}

export default Navbar;
