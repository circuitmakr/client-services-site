import "./P_Dashboard.css";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { setUser } from "../../redux/authReducer";
import { useDispatch } from "react-redux";
import Header from './P_Header';

function P_Dashboard() {
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
        <div className="intro_text p_tile">
          <h2>Upcoming Appointments</h2>
        </div>
        <div className="p_tile">
          <h2>Availability Calendar</h2>
        </div>
        <div className="p_tile">
          <h2>Assignments</h2>
        </div>
        <div className="p_tile">
          <h2>Session Reviews</h2>
        </div>
      </div>
    </div>
  );
}
export default P_Dashboard;