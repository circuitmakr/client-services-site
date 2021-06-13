import "./C_Dashboard.css";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Header from "./C_Header";
import { Link } from "react-router-dom";
import { setUser } from "../../redux/authReducer";
import { authReducer } from "../../redux/authReducer";
import C_Header_Mobile from './C_Header_mobile'


function C_Dashboard(props) {
  const current = useSelector((store) => store.authReducer.user.username);
  const appointments = useSelector((store) => store.appReducer);
  const check_in = useSelector((store)=>store.quizReducer)
  console.log(appointments);
  console.log(check_in)
  return (
    <div>
      <nav className='header_main'>
        <Header />
      </nav>
      <nav className='header_mobile'>
        <C_Header_Mobile />
      </nav>

      <div className="tiles_container">
        <div className="greeting">
          <h1>{`Hello, ${current}`}</h1>
        </div>
        <div className="intro_text tile">
          <div className="appointment_title">
            <h2>Upcoming Appointments</h2>
          </div>
          <div className="appointment_notice">
            {appointments.status ? (
              <div className="check_in_status appt">
                <h1>You've Booked an Appointment:</h1>
                <br/>
                <div className='appointment_booked'>
                <ul>
                  {appointments.appointment.map((e) => {
                    return (
                      <div>
                       <h2><li>{e.apptime}</li></h2> 
                       <h3><li>{e.appday}</li></h3> 
                       <h2><li>{e.appdate}</li></h2> 
                      </div>
                    );
                  })}
                </ul>
                </div>
              </div>
            ) : (
              <>
                <h1>You currently have no Appointments.</h1>
                <Link to="c_schedule" className="btn_booking_link">
                  <button className="btn_booking">Book Now!</button>
                </Link>
              </>
            )}
          </div>
        </div>
        <div className="check_in tile">
          <h2> Check In Status</h2>
          <div className="check_in_status checked_in">
            {check_in.completed?(
              <div>
              <h1>You're checked in for your next session.</h1>
              </div>
              ):(
            <>
            <h1>Pending</h1>
            </>
            )}
            
          </div>
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
}
export default C_Dashboard;
