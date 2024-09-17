import React, { useState, useEffect, useMemo } from "react";
import "../../styles/Dashboard.scss";
import Icon from "../../assets/dash/icon.svg";
import Icon1 from "../../assets/dash/icon (1).svg";
import Icon2 from "../../assets/dash/icon (2).svg";
import Icon3 from "../../assets/dash/icon (3).svg";
import Line from "../../assets/dash/filter-results-button.svg";
import Dot from "../../assets/dash/ic-more-vert-18px.svg";
import axios from "axios";
import Moment from "react-moment";
import { useParams } from "react-router-dom";
import Pagination from 'react-js-pagination';


const Dashboard = () => {
  const params = useParams();
  const [users, setUsers] = useState<Array<any>>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsCountPerPage, setitemsCountPerPage] = useState(10);

  const url = `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setUsers(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

    // PAGINATION

    const handlePageChange = (pageNumber: any) => {
      setCurrentPage(pageNumber);
  };
    const currentTableData = useMemo(() => {
      const firstPageIndex = currentPage * itemsCountPerPage;
      const lastPageIndex = firstPageIndex + itemsCountPerPage;
      return users.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);


  console.log('idan', users)
  let usersWithSavings = 0;
  for (let i = 0; i < users[0]?.accountBalance; i++) {
    if (users[i] instanceof Object) {
      usersWithSavings++;
    }
    console.log("usersWithLoans", usersWithSavings);
  }
  // USERS WITH LOANS
  let usersWithLoans = 0;
  for (let i = 0; i < users[0]?.education?.loanRepayment; i++) {
    if (users[i] instanceof Object) {
      usersWithLoans++;
    }
    console.log("usersWithLoans", usersWithLoans);
  }

  // USERS AND ACTIVE USERS
  let totalUsers = 0;
  for (let i = 0; i < users.length; i++) {
    if (users[i] instanceof Object) {
      totalUsers++;
    }
  }



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
          <h2>{totalUsers}</h2>
        </div>
        <div className="dashboard__cards">
          <span>
            <img src={Icon1} alt="icon" />{" "}
          </span>
          <h4>Active Users</h4>
          <h2>{totalUsers}</h2>
        </div>
        <div className="dashboard__cards">
          <span>
            <img src={Icon2} alt="icon" />{" "}
          </span>
          <h4>Users with Loans</h4>
          <h2> {usersWithLoans} </h2>
        </div>
        <div className="dashboard__cards">
          <span>
            <img src={Icon3} alt="icon" />{" "}
          </span>
          <h4>Users with Savings</h4>
          <h2>{usersWithSavings}</h2>
        </div>
      </div>
      {/* TABLE */}
      <div className="content">
        <table className="dashboard__table">
          <thead>
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
            {currentTableData.map((user, key) => (
              <tr key={key}>
                <td>
                  {user.orgName.charAt(0).toUpperCase() + user.orgName.slice(1)}
                </td>
                <td>{user.userName}</td>
                <td>
                  {user.email.charAt(0).toLowerCase() + user.email.slice(1)}
                </td>
                <td>
                  {user.phoneNumber.replace(
                    /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/
                  )}
                </td>
                <td>
                  <Moment format="MMM DD, YYYY HH:mm A">
                    {user.lastActiveDate}
                  </Moment>
                </td>
                <td>Inactive</td>
                <td>
                  <span>
                    <img src={Dot} alt="line" />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
                        <Pagination
                            hideDisabled
                            activePage={currentPage}
                            itemsCountPerPage={itemsCountPerPage}
                            totalItemsCount={users.length}
                            pageRangeDisplayed={5}
                            prevPageText={'⟨'}
                            nextPageText={'⟩'}
                            // firstPageText={'⟨'}
                            // lastPageText={'⟩'}
                            onChange={handlePageChange}
                        />
    </div>
  );
};

export default Dashboard;
