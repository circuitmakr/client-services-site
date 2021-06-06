import "./P_Dashboard.css";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { setUser } from "../../redux/authReducer";
import { useDispatch, useSelector } from "react-redux";
import Header from './P_Header';
import {user} from "../../redux/authReducer"

function P_Dashboard(props) {
  const currentUser = useSelector(store=>store.authReducer.user.username)
  return (
    <div>
      <nav>
        <Header />
      </nav>
      <div className="tiles_container">
        <div className="greeting">
          <h1>{`Hello, ${currentUser}`}</h1>
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