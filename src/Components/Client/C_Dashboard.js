import "./C_Dashboard.css";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { setUser } from "../../redux/authReducer";
import { useDispatch } from "react-redux";
import Header from "./C_Header";
import { Link } from "react-router-dom";


function C_Dashboard() {
  const username = "Kendal";
  return (
    <div>
      <nav>
        <Header />
      </nav>
      <div className="tiles_container">
        <div className="greeting">
          <h1>{`Hello, ${username}`}</h1>
        </div>
        <div className="intro_text tile">
          <div className='appointment_title'>
          <h2>Upcoming Appointments</h2>
          </div>
          <div className='appointment_notice'>
          <h1>You currently have no Appointments.</h1>
          <Link to='c_schedule' className='btn_booking_link'><button className='btn_booking'>Book Now!</button></Link>
          </div>
        </div>
        <div className="tile">
          <h2> Check In</h2>
        </div>
        <div className="tile">
          <h2>Assignments</h2>
        </div>
        <div className="tile">
          <h2>Session History</h2>
        </div>
      </div>
    </div>
  );
}
export default C_Dashboard;
