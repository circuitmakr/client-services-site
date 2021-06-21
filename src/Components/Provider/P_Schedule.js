import "./P_Schedule.css";
import React, { useEffect } from "react";
import Header from "./P_Header";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function Schedule() {
  const [schedule, setSchedule] = useState([]);
  const [calendar, setCalendar] = useState([]);
  const [servernote, setServerNote] = useState([]);
  const [defaultvalue, setDefaultValue] = useState("0")


  

  const user = useSelector((store) => store.authReducer.user.username);
  const userID = useSelector((store) => store.authReducer.user.provider_id);
  useEffect(() => {
    if (!schedule.find((item) => item.className === calendar)) {
      setSchedule([...schedule, { id: schedule.length, name: calendar }]);
    } else {
      alert("You already entered that time slot.");
    }

  }, [calendar]);

  useEffect(()=>{
    setDefaultValue(`${new Date()}`)
  },[])

  const handleSave = () => {
    const daysOftheWeek = [
      "8:00 am - 9:00 am",
      "9:00 am - 10:00 am",
      "10:00 am - 11:00 am",
      "11:00 am - 12:00 pm",
      "12:00 pm - 1:00 pm",
      "1:00 pm - 2:00 pm",
      "2:00 pm - 3:00 pm",
      "3:00 pm - 4:00 pm",
      "4:00 pm - 5:00 pm",
      "5:00 pm - 6:00 pm",
      "6:00 pm - 7:00 pm",
      "7:00 pm - 8:00 pm",
      "8:00 pm - 9:00 pm",
      "9:00 pm - 10:00 pm",
    ];
    let scheduleArr = [];
    scheduleArr = schedule.map((e) => e.name);
    const dates = scheduleArr;
    let calendarDate = dates[1];
    let flagAvailable = true;
    const calendar = [
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
    ];

    for (let i = 0; i < daysOftheWeek.length; i++) {
      let index = daysOftheWeek.indexOf(dates[i]);
      if (index >= 0) {
        calendar.splice(index, 1, dates[i]);
      }
    }
    console.log(calendarDate, calendar);
    axios
      .post(`/api/provider/calendar/${userID}`, {
        userID,
        calendarDate,
        calendar,
        flagAvailable,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    setSchedule([]);
  };
  const handleClear=()=>{
    setSchedule([])
  }

  return (
    <div>
      <nav>
        <Header />
      </nav>
      <div className="ps_tiles_container">
        <div className="ps_greeting">
          <h1>{`Hello, ${user}`}</h1>
        </div>
        <div className="ps_intro_text ps_tile">
          <h2>Availability Calendar</h2>
          <div className="ps_calendar_display">
            <div className="ps_calendar_header">
              <div className="ps_calendar_header_text">
                <h3>Your Availability Schedule</h3>
              </div>

              <div className="ps_btn_submit_container">
                <button onClick={handleSave} className="ps_btn_submit">
                  Save
                </button>
              </div>
              <div className="ps_btn_refresh_container">
              
                <button 
                onClick={handleClear} className="ps_btn_refresh">
                <i class="fa fa-ban"></i>
                </button>
              </div>
            </div>

            <hr />
            <div className="ps_display_selections">
              {schedule.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </div>
          </div>
          <div className="ps_schedule_wrapper">
            <div className="ps_grid-item ps_toggle">
              <div className="ps_timeslot_title">
                <h3>Timeslot</h3>
              </div>
            </div>
            <div className="ps_grid-item ps_toggle">
              <h3>Availability</h3>
            </div>
            <div className="ps_grid-item ps_toggle">
              <input
                onChange={(e) => {
                  setCalendar(e.target.value);
                }}
                type="date"
                className="ps_date_picker ps_toggle"
                value = {defaultvalue}
              
              />
            </div>
            <div className="ps_grid-item ps_toggle">Closed | Open</div>
            <div className="ps_grid-item ps_toggle">8:00 am - 9:00 am</div>
            <div className="ps_slider ps_grid-item">
              <input
                onChange={(e) => {
                  setCalendar(e.target.className);
                }}
                className="8:00 am - 9:00 am"
                type="range"
                min="0"
                max="1"
                defaultValue={defaultvalue}
              />
            </div>

            <div className="ps_grid-item ps_toggle">10:00 am - 11:00 am</div>
            <div className="ps_grid-item">
              <input
                onChange={(e) => {
                  setCalendar(e.target.className);
                }}
                className="10:00 am - 11:00 am"
                type="range"
                min="0"
                max="1"
                defaultValue="0"
              />
            </div>
            <div className="ps_grid-item ps_toggle">11:00 am - 12:00 pm</div>
            <div className="ps_grid-item">
              <input
                onChange={(e) => {
                  setCalendar(e.target.className);
                }}
                className="11:00 am - 12:00 pm"
                type="range"
                min="0"
                max="1"
                defaultValue="0"
              />
            </div>
            <div className="ps_grid-item ps_toggle">12:00 pm - 1:00 pm</div>
            <div className="ps_grid-item">
              <input
                onChange={(e) => {
                  setCalendar(e.target.className);
                }}
                className="12:00 pm - 1:00 pm"
                type="range"
                min="0"
                max="1"
                defaultValue="0"
              />
            </div>
            <div className="ps_grid-item ps_toggle">1:00 pm - 2:00 pm</div>
            <div className="ps_grid-item">
              <input
                onChange={(e) => {
                  setCalendar(e.target.className);
                }}
                className="1:00 pm - 2:00 pm"
                type="range"
                min="0"
                max="1"
                defaultValue="0"
              />
            </div>
            <div className="ps_grid-item ps_toggle">2:00 pm - 3:00 pm</div>
            <div className="ps_grid-item">
              <input
                onChange={(e) => {
                  setCalendar(e.target.className);
                }}
                className="2:00 pm - 3:00 pm"
                type="range"
                min="0"
                max="1"
                defaultValue="0"
              />
            </div>
            <div className="ps_grid-item ps_toggle">3:00 pm - 4:00 pm</div>
            <div className="ps_grid-item">
              <input
                onChange={(e) => {
                  setCalendar(e.target.className);
                }}
                className="3:00 pm - 4:00 pm"
                type="range"
                min="0"
                max="1"
                defaultValue="0"
              />
            </div>
            <div className="ps_grid-item ps_toggle">4:00 pm - 5:00 pm</div>
            <div className="ps_grid-item">
              <input
                onChange={(e) => {
                  setCalendar(e.target.className);
                }}
                className="4:00 pm - 5:00 pm"
                type="range"
                min="0"
                max="1"
                defaultValue="0"
              />
            </div>
            <div className="ps_grid-item ps_toggle">5:00 pm - 6:00 pm</div>
            <div className="ps_grid-item">
              <input
                onChange={(e) => {
                  setCalendar(e.target.className);
                }}
                className="5:00 pm - 6:00 pm"
                type="range"
                min="0"
                max="1"
                defaultValue="0"
              />
            </div>
            <div className="ps_grid-item ps_toggle">6:00 pm - 7:00 pm</div>
            <div className="ps_grid-item">
              <input
                onChange={(e) => {
                  setCalendar(e.target.className);
                }}
                className="6:00 pm - 7:00 pm"
                type="range"
                min="0"
                max="1"
                defaultValue="0"
              />
            </div>
            <div className="ps_grid-item ps_toggle">7:00 pm - 8:00 pm</div>
            <div className="ps_grid-item">
              <input
                onChange={(e) => {
                  setCalendar(e.target.className);
                }}
                className="7:00 pm - 8:00 pm"
                type="range"
                min="0"
                max="1"
                defaultValue="0"
              />
            </div>
            <div className="ps_grid-item ps_toggle">8:00 pm - 9:00 pm</div>
            <div className="ps_grid-item">
              <input
                onChange={(e) => {
                  setCalendar(e.target.className);
                }}
                className="8:00 pm - 9:00 pm"
                type="range"
                min="0"
                max="1"
                defaultValue="0"
              />
            </div>
            <div className="ps_grid-item ps_toggle">9:00 pm - 10:00 pm</div>
            <div className="ps_grid-item">
              <input
                onChange={(e) => {
                  setCalendar(e.target.className);
                }}
                className="9:00 pm - 10:00 pm"
                type="range"
                min="0"
                max="1"
                defaultValue="0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
