import React from "react";
import "./P_Header.css";
import { Link, withRouter } from "react-router-dom";
import axios from 'axios'


function P_Header(props) {
  const handleLogout = async () => {
    try {
      await axios.get("/auth/logout")
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="p_main_nav_container">
      <div className="p_sub_container">
        <nav className="p_links">
        <div onclick={handleLogout} className='p_logo'></div>
        <Link to='/p_dashboard'>Home</Link>
        <Link to='/p_schedule'>Calendar</Link>
        <Link to='/p_notes'>Assignments</Link>
        <Link to='/p_history'>Client Profiles</Link>
        <Link to='/p_progress'>Client Progress</Link>
        <Link to='/' onclick={handleLogout}>Logout</Link>
        </nav>
        <div className="p_avatar">
        <i className="fas fa-user-md"></i>
        </div>
      </div>
    </div>
  );
}

export default withRouter(P_Header);