import React from "react";
import "./C_Header.css";
import { Link, withRouter } from "react-router-dom";

function Header() {
  return (
    <div className="main_nav_container">
      <div className="sub_container">
        <nav className="links">
        <div className='logo'></div>
        <Link to='/c_Dashboard'>Home</Link>
        <Link to='/c_Schedule'>Schedule</Link>
        <Link to='/c_check_in'>Check In</Link>
        <Link to='/progress'>Progress</Link>
        <Link to='/history'>History</Link>
        <Link to='/'>Logout</Link>
        </nav>
        <div className="avatar">
          <i className="fas fa-user"></i>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Header);
