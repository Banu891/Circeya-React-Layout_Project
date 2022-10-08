import React from "react";
import "./Navbar.css";
import logo from "../../assets/Vector.png";
import title from "../../assets/Circeya.png";
import contact from "../../assets/Vector2.png"

function Header() {


  return (
    <div className="header">
      <div>
        <img className="header-logo" src={logo} alt="vektor-logo" />
        <img className="header-title" src={title} alt="circeya-title" />
      </div>
      <div id="contact">
              <p className="header-number">+7 (495) 495-49-54</p>
              <img className="header-number-small" src={contact} alt='/' />
      </div>
    </div>
  );
}

export default Header;
