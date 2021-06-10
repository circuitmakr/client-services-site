import React from "react";
import "./P_Header_mobile.css";
import { Link } from "react-router-dom";
import axios from 'axios'


function P_Header_mobile(props) {
  const handleLogout = async () => {
    try {
      await axios.get("/auth/logout")
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="pm_main_nav_container">
      <div className="pm_sub_container">
        <nav className="pm_links">
        <Link to='/p_dashboard'>
        <i class="fa fa-house-user"></i>
        </Link>
        <Link to='/p_schedule'>
        <i class="fa fa-calendar-check"></i>
        </Link>
        <Link to='/p_notes'>
          <i class="fa fa-list"></i>
        </Link>
        <Link to='/p_history'>
        <i class="fa fa-users"></i>
        </Link>
        <Link to='/p_progress'>
        <i class="fa fa-chart-line"></i>
        </Link>
        <Link to='/'onclick={handleLogout}>Logout</Link>
        </nav>
      </div>
    </div>
  );
}

export default P_Header_mobile;