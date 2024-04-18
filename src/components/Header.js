import { useState } from "react";
import { LOGO_URL } from "../utils/contants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Log--In");
  return (
    <div className="header">
      <div className="logoContainer">
        <img className="logo" src={LOGO_URL} />
      </div>
      <ul className="navItems">
        <li>
        <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/about"> About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact US</Link>
        </li>
        <li>Cart</li>
        <button
          className="login"
          onClick={() => {
            btnName === "Log--In"
              ? setBtnName("Log Out")
              : setBtnName("Log--In");
          }}
        >
          {btnName}
        </button>
      </ul>
    </div>
  );
};

export default Header;
