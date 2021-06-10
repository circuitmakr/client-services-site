import React from "react";
import "./C_Header_mobile.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

function C_Header_mobile() {
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
    <div className="cm_main_nav_container">
      <div className="cm_sub_container">
        <nav className="cm_links">
          <Link to="/c_dashboard">
          <i class="fa fa-house-user"></i>
          </Link>
          <Link to="/c_schedule">
          <i class="fa fa-calendar-check"></i>
            </Link>
          <Link to="/c_quiz">
          <i class="fa fa-comment-dots"></i>
          </Link>
          <Link to="/c_progress">
          <i class="fa fa-chart-line"></i>
            </Link>
          <Link to="/c_history">
          <i class="fa fa-book-medical"></i>
            </Link>
          <Link onClick={handleLogout} to="/">
            Logout
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default C_Header_mobile;
