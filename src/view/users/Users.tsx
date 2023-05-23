import React, { useState } from "react";
import "../../styles/User.scss";
import Icon from "../../assets/dash/icon.svg";
import Icon1 from "../../assets/dash/icon (1).svg";
import Icon2 from "../../assets/dash/icon (2).svg";
import Icon3 from "../../assets/dash/icon (3).svg";
import Line from "../../assets/dash/filter-results-button.svg";
import Dot from "../../assets/dash/ic-more-vert-18px.svg";

const Users = () => {
  const [tableHeadersVisibility, setTableHeadersVisibility] = useState(false);

  const headerToggleDropDownVisibility = () => {
    setTableHeadersVisibility(!tableHeadersVisibility);
  };

  return (
    <div className="dash__flex">
      <div className="dash__container">
        <h2>Users</h2>
      </div>
      <div className="cards">
        <div className="dashboard__cards">
          <span>
            <img src={Icon} alt="icon" />{" "}
          </span>
          <h4>Users</h4>
          <h2>2,453</h2>
        </div>
        <div className="dashboard__cards">
          <span>
            <img src={Icon1} alt="icon" />{" "}
          </span>
          <h4>Active Users</h4>
          <h2>2,453</h2>
        </div>
        <div className="dashboard__cards">
          <span>
            <img src={Icon2} alt="icon" />{" "}
          </span>
          <h4>Users with Loans</h4>
          <h2>2,453</h2>
        </div>
        <div className="dashboard__cards">
          <span>
            <img src={Icon3} alt="icon" />{" "}
          </span>
          <h4>Users with Savings</h4>
          <h2>2,453</h2>
        </div>
      </div>
      <div className="content">
        <table className="dashboard__table">
          <thead onClick={headerToggleDropDownVisibility}>
            <tr>
              <th>
                ORGANIZATION{" "}
                <span>
                  <img src={Line} alt="line" />
                </span>
              </th>
              <th>
                USERNAME{" "}
                <span>
                  <img src={Line} alt="line" />
                </span>
              </th>
              <th>
                EMAIL{" "}
                <span>
                  <img src={Line} alt="line" />
                </span>
              </th>
              <th>
                PHONE NUMBER{" "}
                <span>
                  <img src={Line} alt="line" />
                </span>
              </th>
              <th>
                DATE JOINED{" "}
                <span>
                  <img src={Line} alt="line" />
                </span>
              </th>
              <th>
                STATUS{" "}
                <span>
                  <img src={Line} alt="line" />
                </span>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {tableHeadersVisibility && (
                <section className="popUp">
                  <div>
                    <p>Organization</p>
                    <select>
                      <option>Terragon</option>
                      <option>Lendsqr</option>
                    </select>
                  </div>
                  <div>
                    <p>Username</p>
                    <input id="header__text" type="text" placeholder="User" />
                  </div>
                  <div>
                    <p>Email</p>
                    <input id="header__text" type="email" placeholder="Email" />
                  </div>
                  <div>
                    <p>Date</p>
                    <input id="header__text" type="date" placeholder="Date" />
                  </div>
                  <div>
                    <p>Phone Number</p>
                    <input
                      id="header__text"
                      type="text"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div>
                    <p>Status</p>
                    <select>
                      <option>Active</option>
                      <option>Inactive</option>
                    </select>
                  </div>
                  <div className="btn__div">
                    <button className="user__btn">Reset</button>
                    <button className="user__btn1">Filter</button>
                  </div>
                </section>
              )}
              <td>Lendsqr</td>
              <td>Adedeji</td>
              <td>adedeji@lendsqr.com</td>
              <td>08078903721</td>
              <td>May 15, 2020 10:00 AM</td>
              <td>Inactive</td>
              <td>
                <span>
                  <img src={Dot} alt="line" />
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
