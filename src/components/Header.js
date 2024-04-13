import { useState } from "react";
import { LOGO_URL } from "../utils/contants";

let btnLog = "LogIn";

const Header = () => {
  const [btnName, setBtnName] = useState("Log--In");
  return (
    <div className="header">
      <div className="logoContainer">
        <img className="logo" src={LOGO_URL} />
      </div>
      <ul className="navItems">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact US</li>
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
