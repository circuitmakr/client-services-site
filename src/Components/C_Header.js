import React from "react";
import "./C_Header.css";
import { Link, withRouter } from "react-router-dom";

function Header() {
  return (
    <div className="main_nav_container">
      <div className="sub_container">
        <nav className="links">
        <div className='logo'></div>
        <Link to='/c_dashboard'>Home</Link>
        <Link to='/c_schedule'>Schedule</Link>
        <Link to='/c_quiz'>Check In</Link>
        <Link to='/c_progress'>Progress</Link>
        <Link to='/c_history'>History</Link>
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
