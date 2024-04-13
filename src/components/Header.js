import { LOGO_URL } from "../utils/contants";

const Header = () => {
    return (
      <div className="header">
        <div className="logoContainer">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <ul className="navItems">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact US</li>
          <li>Cart</li>
        </ul>
      </div>
    );
  };

  export default Header;