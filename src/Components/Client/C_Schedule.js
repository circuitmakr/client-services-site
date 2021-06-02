import "./C_Schedule.css";
import Header from "./C_Header";
import { useEffect, useState } from "react";

function Schedule() {
  const usersession = "Session Planning";
  return (
    <div>
      <nav>
        <Header />
      </nav>
      <div className="s_tiles_container">
        <div className="s_greeting">
          <h1>{`${usersession}`}</h1>
        </div>
        <div className="s_intro_text s_tile">
          <h2>Check Availabilities</h2>
        </div>
        <div className="s_tile">
          <h2>Select a Session</h2>
        </div>
        <div className="s_tile">
          <h2>Previous Sessions</h2>
        </div>
      </div>
    </div>
  );
}
export default Schedule;
