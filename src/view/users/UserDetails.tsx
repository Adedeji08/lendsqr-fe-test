import React,{useState} from "react";
import "../../styles/UserDetails.scss";
import { Link } from "react-router-dom";
import Back from "../../assets/user/Vector.svg";
import Avatar from "../../assets/user/avatar.svg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


const UserDetails = () => {

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = ({id}:any) => {
    setActiveTab(id);
  };

  return (
    <div className="dash__flex">
      <Link to="/users" className="back__to__user">
        <span>
          <img src={Back} alt="back" /> Back to Users
        </span>
      </Link>
      <div className="user__details">
        <h2>User Details</h2>
        <div className="active__btn">
          <button type="submit" className="blacklist__btn">
            BLACKLIST USER
          </button>
          <button type="submit" className="activate__btn">
            ACTIVATE USER
          </button>
        </div>
      </div>
      <div className="user__tab">
        <div className="flex__user">
          <p style={{ display: "flex" }}>
            <img src={Avatar} alt="avatar" />
            <p>
              Grace Effiom
              <span>
                <br />
                LSQFf587g90
              </span>
            </p>
          </p>
          <hr />
          <p className="tier">User’s Tier</p>
          <hr/>
          <p style={{marginTop: '32px'}}>₦200,000.00</p>
        </div>
        <ul style={{listStyle: 'none'}} className="bloc__tabs">
        <li className={activeTab === 1 ? 'active' : 'tab'} onClick={() => handleTabClick(1) }>First Tab</li>
        <li className={activeTab === 2 ? 'active' : 'tab'} onClick={() => handleTabClick(2) }>Second Tab</li>
          <li>Bank Details</li>
          <li>Loans</li>
          <li>Savings</li>
          <li>App and System</li>
        </ul>
      </div>
   
      <div className={activeTab === 1 ?  'contents active-content' : 'contents'}>
          
            <div className="tab_panel">First tab content</div> 
           
          
          
            <div className="tab_panel">First tab content</div> 
           
        </div>

        <div className={activeTab === 2 ?  'contents active-content' : 'contents'}>
          
            <div className="tab_panel">First tab content</div> 
           
          
          
            <div className="tab_panel">First tab content</div> 
           
        </div>
        {/* <Tabs defaultIndex={1}>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
          <Tab >Title 3</Tab>
          <Tab>Title 4</Tab>
        </TabList>
 
        <TabPanel>
          <h3>Tab 1</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </TabPanel>
        <TabPanel>
          <h3>Tab 2</h3>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </TabPanel>
        <TabPanel>
          <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore veniam et fugit, soluta consequatur rem cumque suscipit magni fuga, excepturi laudantium ipsa culpa amet maiores. Blanditiis dolore aperiam enim autem.</h3>
        </TabPanel>
        <TabPanel>
          <h3>Tab 4</h3>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
        </TabPanel>
      </Tabs> */}
    </div>
  );
};

export default UserDetails;
