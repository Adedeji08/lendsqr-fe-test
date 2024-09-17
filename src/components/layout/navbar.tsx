import React, {useState} from "react";
import "../../styles/Navbar.scss";
import Search from "../../assets/nav/Vector.svg";
import Notify from "../../assets/nav/np_notification_2425223_000000 1.svg";
import ArrowDown from "../../assets/nav/np_dropdown_615120_000000 1.svg";
import User from "../../assets/nav/avatar.svg";
import { Link } from "react-router-dom";

const Navbar = (props: any) => {
  const [logoutVisibility, setLogoutVisibility] = useState(false);
  const [searchData, setSearchData] = useState('');
  const [filterResult, setFilteredResults] = useState('')
  
  const navToggleDropDownVisibility = () => {
    setLogoutVisibility(!logoutVisibility);
  };
   
  const searchInput = (searchValue: any) => {
    setSearchData(searchValue);
    if( searchData !== ''){
    const filteredData = async () => {
      const response = await fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`)
      const data = await response.json()

      props.setUsers(data)
    }
    try {
      filteredData()
              } catch (error) {
                  console.log(error)
              }
              
  }
  console.log('results', filterResult)
  }



  
  return (
    <div className="nav__flex">
      <div className="nav__container">
        {/* LEFT */}
        <div className="left__nav__container">
          <input
            className="search"
            type="search"
            placeholder="Search for anything"
            onChange={(e) => searchInput(e.target.value)}
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
          <span onClick={navToggleDropDownVisibility}>
            {" "}
            <img src={ArrowDown} alt="notification" />
          </span>
          {
            logoutVisibility && (
              <Link to='/login'>
              <button type="reset">Logout</button>
             </Link>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
