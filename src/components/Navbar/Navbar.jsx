import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faShoppingCart,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const menuData = [
  {
    title: "INICIO",
    url: "/",
    icon: faHome,
  },
  {
    title: "PRODUCTOS",
    url: "/products",
    icon: faShoppingCart,
  },
  {
    title: "CONTACTO",
    url: "/contact",
    icon: faEnvelope,
  },
];

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {menuData.map((item, index) => (
          <li key={index} className="navbar-item">
            <Link
              activeClass="active"
              to={item.url.substring(1)}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <FontAwesomeIcon icon={item.icon} /> {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
