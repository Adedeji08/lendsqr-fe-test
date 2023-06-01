import React, { useState, useEffect, useMemo } from "react";
import "../../styles/User.scss";
import Icon from "../../assets/dash/icon.svg";
import Icon1 from "../../assets/dash/icon (1).svg";
import Icon2 from "../../assets/dash/icon (2).svg";
import Icon3 from "../../assets/dash/icon (3).svg";
import Line from "../../assets/dash/filter-results-button.svg";
import Dot from "../../assets/dash/ic-more-vert-18px.svg";
import View from '../../assets/user/np-view.svg'
import Blacklist from '../../assets/user/np-delete.svg'
import Activate from '../../assets/user/np-user.svg'
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Pagination from 'react-js-pagination';
import Moment from "react-moment";
import { Select } from "../../components/Select";

const Users = () => {
  const [loading, setLoading] = useState()
  const [tableHeadersVisibility, setTableHeadersVisibility] = useState(false);
  const [userVisibility, setUserVisibility] = useState(false);
  const params = useParams()

  const headerToggleDropDownVisibility = () => {
    setTableHeadersVisibility(!tableHeadersVisibility);
  };
  const userToggleDropDownVisibility = () => {
    setUserVisibility(!userVisibility);
  };

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

  // SETTING LOCAL STORAGE

  localStorage.setItem('user', JSON.stringify(users));

  let userInfo: any = localStorage.getItem('user')
  console.log('userInfo', userInfo?.email)

   // PAGINATION

   const handlePageChange = (pageNumber: any) => {
    setCurrentPage(pageNumber);
};
  const currentTableData = useMemo(() => {
    const firstPageIndex = currentPage * itemsCountPerPage;
    const lastPageIndex = firstPageIndex + itemsCountPerPage;
    return users.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);



    // USERS WITH SAVINGS
    let usersWithSavings = 0;
    for (let i = 0; i < users[0]?.accountBalance; i++) {
      if (users[i] instanceof Object) {
        usersWithSavings++;
      }
     
    }
    // USERS WITH LOANS
    let usersWithLoans = 0;
    for (let i = 0; i < users[0]?.education?.loanRepayment; i++) {
      if (users[i] instanceof Object) {
        usersWithLoans++;
      }
     
    }
  
    // USERS AND ACTIVE USERS
    let totalUsers = 0;
    for (let i = 0; i < users.length; i++) {
      if (users[i] instanceof Object) {
        totalUsers++;
      }
    }

    const allUsers = currentTableData
    ? currentTableData &&
      currentTableData.map((client) => {
          return {
              key: client.orgName,
              encrypted_credential: client.encrypted_credential,
              partnerID: client.partnerID,
          };
      })
    : [];

    const orgOptions = [
      { key: 'x', value: '', option: 'Lendsqr'},
      ...(allUsers
          ? allUsers.map(({ partnerID, key, name }: any) => {
                return {
                    key: partnerID || key,
                    value: partnerID || key,
                    option: name || key,
                };
            })
          : []),
        
  ]; 
  

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
                  <Moment format="MMM DD, YYYY, HH:mm A">
                    {user.lastActiveDate}
                  </Moment>
                </td>
                {/* <td>Inactive</td> */}
                 <td onClick={userToggleDropDownVisibility}>
                <span>
                  <img src={Dot} alt="line" />
                </span>
                {
                    userVisibility && (
                        <div className="user__view">
                            <Link to={`/userdetails`}>
                            <p> <span> <img src={View} alt="view" /> </span>View Details</p>
                            <p> <span> <img src={Blacklist} alt="view" /> </span>Blacklist User</p>
                            <p><span> <img src={Activate} alt="view" /> </span>Activate User</p>
                            </Link>
                        </div>
                    )
                }
              </td>
              </tr>
            ))}
          </tbody>
          {tableHeadersVisibility && (
            <div>
                <form className="popUp">
                  <div>
                         {orgOptions ? (
                        <Select
                            id="datepickers"
                            // name="clientId"
                            label='Organization'
                            valuesOptions={orgOptions}
                            initialValue=""
                            // onChange={handleChange}
                        
                        />
                    ) : (
                        loading
                    )}

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
                </form>
                </div>
              )}
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

export default Users;
