import React from "react";
import "../../styles/Dashboard.scss";
import Icon from "../../assets/dash/icon.svg";
import Icon1 from "../../assets/dash/icon (1).svg";
import Icon2 from "../../assets/dash/icon (2).svg";
import Icon3 from "../../assets/dash/icon (3).svg";
import Line from "../../assets/dash/filter-results-button.svg";
import Dot from "../../assets/dash/ic-more-vert-18px.svg";

const Dashboard = () => {
  return (
    <div className="dash__flex">
      <div className="dash__container">
        <h2>Users</h2>
      </div>
      {/* CARDS */}
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
      {/* TABLE */}
      <div className="content">
      <table className="dashboard__table">
                    <thead>
                        <tr>
                            <th>ORGANIZATION <span><img src={Line} alt="line" /></span></th>
                            <th>USERNAME <span><img src={Line} alt="line" /></span></th>
                            <th>EMAIL <span><img src={Line} alt="line" /></span></th>
                            <th>PHONE NUMBER <span><img src={Line} alt="line" /></span></th>
                            <th>DATE JOINED <span><img src={Line} alt="line" /></span></th>
                            <th>STATUS <span><img src={Line} alt="line" /></span></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Lendsqr</td>
                            <td>Adedeji</td>
                            <td>adedeji@lendsqr.com</td>
                            <td>08078903721</td>
                            <td>May 15, 2020 10:00 AM</td>
                            <td>Inactive</td>
                            <td><span><img src={Dot} alt="line" /></span></td>   
                        </tr>
                        <tr>
                            <td>Lendsqr</td>
                            <td>Adedeji</td>
                            <td>adedeji@lendsqr.com</td>
                            <td>08078903721</td>
                            <td>May 15, 2020 10:00 AM</td>
                            <td>Inactive</td>
                            <td><span><img src={Dot} alt="line" /></span></td>   
                        </tr>
                    </tbody>
                </table>
      </div>
    </div>
  );
};

export default Dashboard;
