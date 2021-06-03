import "./C_Schedule.css";
import Header from "./C_Header";
import { useEffect, useState } from "react";

function Schedule() {
  const usersession = "Session Planning";
  const today = new Date('June 5 2021');
  const day = ['Mon', 'Tues', 'Wed', 'Thurs','Fri']
  const handleClick = (e) =>{
    console.log(e.target.value)
  }
  const daysOftheWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  let i =0;
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
          <div className='s_current_date'>
          {/* <h4>{`Today is ${day[today.getDay()-1]} ${today.getMonth()+1}/${today.getDay()-1}/${today.getFullYear()}`}</h4> */}
          <nav className ="s_calendar_nav">
            <div className="s_calendar_btn left"></div>
            <div className="s_calendar_btn today"><i class="fa fa-calendar-day"></i></div>
            <div className="s_calendar_btn right"></div>
          </nav>
          </div>
          <div className='s_calendar'>
            <div className="grid-item day-1 top">{daysOftheWeek[i]} </div>
            <div className="grid-item day-2 top">{daysOftheWeek[i+1]}</div>
            <div className="grid-item day-3 top">{daysOftheWeek[i+2]}</div>
            <div className="grid-item day-4 top">{daysOftheWeek[i+3]}</div>
            <div className="grid-item day-5 top">{daysOftheWeek[i+4]}</div>
            <div className="grid-item day-6 top">{daysOftheWeek[i+5]}</div>
            <div className="grid-item day-4 top">{daysOftheWeek[i+6]}</div>
            <div className="grid-item day-1 bottom">
              <ul className='day_1'>
                <li value='9am-10am' onClick={handleClick}>*</li>
                <li >10am-11am</li>
                <li >*</li>
                <li >*</li>
                <li >1pm-2pm</li>
                <li >2pm-3pm</li>
                <li >*</li>
                <li >*</li>
                <li onClick={handleClick} value='6pm-7pm'>*</li>
                <li value='7pm-8pm' onClick={handleClick}>7pm-8pm</li>
                <li value='8pm-9pm'>*</li>
                <li>9pm-10pm</li>
              </ul>
            </div>
            <div className="grid-item day-2 bottom"></div>
            <div className="grid-item day-3 bottom"></div>
            <div className="grid-item day-4 bottom"></div>
            <div className="grid-item day-5 bottom"></div>
            <div className="grid-item day-6 bottom"></div>
            <div className="grid-item day-7 bottom"></div>

            </div>
        </div>

        <div className="s_tile">
          <h2>Session Details</h2>
        </div>
        <div className="s_tile">
          <h2>Your Providers</h2>
        </div>
      </div>
    </div>
  );
}
export default Schedule;
