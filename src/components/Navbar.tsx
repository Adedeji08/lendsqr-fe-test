import React from "react";
import "../styles/Navbar.scss";
import Search from "../assets/nav/Vector.svg";
import Notify from "../assets/nav/np_notification_2425223_000000 1.svg";
import ArrowDown from "../assets/nav/np_dropdown_615120_000000 1.svg";
import User from "../assets/nav/avatar.svg";

const Navbar = () => {
  return (
    <div className="nav__flex">
      <div className="nav__container">
        {/* LEFT */}
        <div className="left__nav__container">
          <input
            className="search"
            type="search"
            placeholder="Search for anything"
          />
          <span>
            <img src={Search} alt="Search" />
          </span>
        </div>
        {/* RIGHT */}
        <div className="right__nav__container">
          <p>Docs</p>
          <span>
            <img src={Notify} alt="notification" />
          </span>
          <span>
            {" "}
            <img src={User} style={{ marginTop: "-10px" }} alt="notification" />
          </span>
          <span>Adedeji</span>
          <span>
            {" "}
            <img src={ArrowDown} alt="notification" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
