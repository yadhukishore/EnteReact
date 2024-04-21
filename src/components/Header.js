import { useState } from "react";
import { LOGO_URL } from "../utils/contants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Log--In");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-orange-400 shadow-lg mb-10 sm:bg-yellow-400">
      <div className="logoContainer">
        <img className="w-50" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-8 m-4 ">
          <li className="px-10" >Online Status:{onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-5" >
            <Link to="/"> Home </Link>
          </li>
          <li className="px-1" >
            <Link to="/about"> About Us</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact US</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="btn bg-zinc-100 px-2 py-1 rounded-xl"
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
    </div>
  );
};

export default Header;
