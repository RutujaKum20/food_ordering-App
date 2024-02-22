// import LOGO_URL from "../utils/constants";
import { LOGO_URL } from "../utils/constants"; //importing name
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  return (
    <div className="flex justify-between shadow-lg bg-pink-100 sm:bg-yellow-100 lg:bg-green-100">
      <div className="logo-container">
        <img className="w-[200px] " src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-3 m-3 gap-5 ">
          <li className="px-4">online status : {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">HOME</Link>
          </li>
          <li className="px-4">
            <Link to="/about">ABOUT US</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">CONTACT US</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">CART</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
