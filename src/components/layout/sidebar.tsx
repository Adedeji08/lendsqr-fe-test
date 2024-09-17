import React, { useState } from "react";
import "../../styles/Sidebar.scss";
import Logo from "../../assets/Group.svg";
import Home from "../../assets/home-1.svg";
import { customers } from "../SidebarData";
import { business } from "../SidebarData";
import { settings } from "../SidebarData";
import Org from "../../assets/Buz/briefcase 1.svg";
import {  Link } from "react-router-dom";

const Sidebar = () => {
  const [customersVisibility, setCustomersVisibility] = useState(false);
  const [businessVisibility, setBusinessVisibility] = useState(false);
  const [settingsVisibility, setSettingsVisibility] = useState(false);

  const customerToggleDropDownVisibility = () => {
    setCustomersVisibility(!customersVisibility);
  };

  const businessToggleDropDownVisibility = () => {
    setBusinessVisibility(!businessVisibility);
  };

  const settingsToggleDropDownVisibility = () => {
    setSettingsVisibility(!settingsVisibility);
  };
  return (
    <div className="flex">
      <div className="sidebar__container">
        {/* LOGO */}
        <div>
          <p className="logo__container">
            <img src={Logo} alt="Logo" width={144} height={30} />
          </p>
        </div>

        <div className="org__switch">
          <span>
            <img src={Org} alt="show" />
          </span>
          &nbsp;&nbsp;
          <p>Switch Organization</p>&nbsp;
          <span>
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0573 0.993798C10.8984 0.152706 12.1595 1.45646 11.3184 2.25489L6.56759 7.00565C6.23127 7.38408 5.64282 7.38408 5.3065 7.00565L0.640017 2.38131C-0.158963 1.54022 1.10267 0.27907 1.94322 1.12022L5.937 5.114L10.0573 0.993798Z"
                fill="#213F7D"
              />
            </svg>
          </span>
        </div>

        {/* DASHBOARD */}
        <div className="dashboard">
          <span>
            <img src={Home} alt="dashboard" />
          </span>{" "}
          &nbsp;
          <Link to="/">
            <span>Dashboard</span>
          </Link>
        </div>
        {/* CUSTOMERS */}
        <div className="customers">
          <p onClick={customerToggleDropDownVisibility}>CUSTOMERS</p>
          <div className="customer__list">
            {customersVisibility && (
              <div>
                {customers.map(({ Icon, name }, items) => (
                  <Link
                    className="customer__link"
                    style={{ display: "flex" }}
                    to='/users'
                  >
                    <span>
                      {" "}
                      <Icon />{" "}
                    </span>
                    &nbsp;
                    <p> {name} </p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* BUSINESSES */}
        <div className="customers">
          <p onClick={businessToggleDropDownVisibility}>BUSINESSES</p>
          <div className="customer__list">
            {businessVisibility && (
              <div>
                {business.map(({ Icon, name }) => (
                  <Link
                    className="customer__link"
                    style={{ display: "flex" }}
                    to='/'
                  >
                    <span>
                      {" "}
                      <Icon />{" "}
                    </span>
                    &nbsp;
                    <p> {name} </p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* SETTINGS */}
        <div className="customers">
          <p onClick={settingsToggleDropDownVisibility}>SETTINGS</p>
          <div className="customer__list">
            {settingsVisibility && (
              <div>
                {settings.map(({ Icon, name }) => (
                  <Link
                    className="customer__link"
                    style={{ display: "flex" }}
                    to="/"
                  >
                    <span>
                      {" "}
                      <Icon />{" "}
                    </span>
                    &nbsp;
                    <p> {name} </p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <main className='view__component'>{children}</main> */}
    </div>
  );
};

export default Sidebar;
