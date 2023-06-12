import React from "react";
import "./Navbar.css";

const Logo = () => {
  return (
    <div>
      <a href="#">
        <div className="logo-wrap">
          <img
            id="logo"
            className="logo"
            src="https://res.cloudinary.com/dkpbl67xq/image/upload/v1686518318/Queso%20Express/logo_unosqe.png"
            alt="Brand logo"
          />
        </div>
      </a>
    </div>
  );
};

export default Logo;
