import React from "react";
import "./C_Header.css";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

function Header() {
  const user = useSelector((store) => store.authReducer.user);
  const handleLogout = async () => {
    axios
      .get("/auth/logout")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="main_nav_container">
      <div className="sub_container">
        <nav className="links">
          <div className="logo"></div>
          <Link to="/c_dashboard">Home</Link>
          <Link to="/c_schedule">Schedule</Link>
          <Link to="/c_quiz">Check In</Link>
          <Link to="/c_progress">Progress</Link>
          <Link to="/c_history">History</Link>
          <Link onClick={handleLogout} to="/">
            Logout
          </Link>
        </nav>
        <div className="avatar">
          <i className="fas fa-user"></i>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Header);
