import "./P_Schedule.css"
import React, { useEffect } from 'react';
import Header from './P_Header'
import {  useState} from 'react'



function Schedule(){
  const [schedule, setSchedule] = useState([]);
   const handleOnChange=(e)=>{
     setSchedule(e.target.className,e.target.value)
       console.log(schedule)
   }
    return(
        <div>
        <nav>
          <Header />
        </nav>
        <div className="ps_tiles_container">
          <div className="ps_greeting">
            <h1>{`Hello, Kendal`}</h1>
          </div>
          <div className="ps_intro_text ps_tile">
            <h2>Availability Calendar</h2>
            <div className='ps_schedule_wrapper'>
               
                <div className='ps_grid-item ps_toggle'><h3>Timeslot</h3></div>
                <div className='ps_grid-item ps_toggle'><h3>Availability</h3></div>
                <div className='ps_grid-item ps_toggle'>
                <input type="date" className='ps_date_picker ps_toggle' />
                </div>
                <div className='ps_grid-item ps_toggle'>Closed | Open</div>
                <div className='ps_grid-item ps_toggle'>8:00 am - 9:00 am</div>
                <div className='ps_slider ps_grid-item'><input onChange={(e)=>{handleOnChange(e)}} className='time_range_01' type="range" min='0' max='1' defaultValue='0'/></div>

                <div className='ps_grid-item ps_toggle'>10:00 am - 11:00 am</div>
                <div className='ps_grid-item'><input onChange={(e)=>{handleOnChange(e)}} className='time_range_02' type="range" min='0' max='1' defaultValue='0' /></div>
                <div className='ps_grid-item ps_toggle'>11:00 am - 12:00 pm</div>
                <div className='ps_grid-item'><input onChange={(e)=>{handleOnChange(e)}} className='time_range_03' type="range" min='0' max='1' defaultValue='0' /></div>
                <div className='ps_grid-item ps_toggle'>12:00 pm - 1:00 pm</div>
                <div className='ps_grid-item'><input onChange={(e)=>{handleOnChange(e)}} className='time_range_04' type="range" min='0' max='1' defaultValue='0' /></div>
                <div className='ps_grid-item ps_toggle'>1:00 pm - 2:00 pm</div>
                <div className='ps_grid-item'><input onChange={(e)=>{handleOnChange(e)}} className='time_range_05' type="range" min='0' max='1' defaultValue='0' /></div>
                <div className='ps_grid-item ps_toggle'>2:00 pm - 3:00 pm</div>
                <div className='ps_grid-item'><input onChange={(e)=>{handleOnChange(e)}} className='time_range_06' type="range" min='0' max='1' defaultValue='0' /></div>
                <div className='ps_grid-item ps_toggle'>3:00 pm - 4:00 pm</div>
                <div className='ps_grid-item'><input onChange={(e)=>{handleOnChange(e)}} className='time_range_07' type="range" min='0' max='1' defaultValue='0' /></div>
                <div className='ps_grid-item ps_toggle'>4:00 pm - 5:00 pm</div>
                <div className='ps_grid-item'><input onChange={(e)=>{handleOnChange(e)}} className='time_range_08' type="range" min='0' max='1' defaultValue='0' /></div>
                <div className='ps_grid-item ps_toggle'>5:00 pm - 6:00 pm</div>
                <div className='ps_grid-item'><input onChange={(e)=>{handleOnChange(e)}} className='time_range_09' type="range" min='0' max='1' defaultValue='0' /></div>
                <div className='ps_grid-item ps_toggle'>6:00 pm - 7:00 pm</div>
                <div className='ps_grid-item'><input onChange={(e)=>{handleOnChange(e)}} className='time_range_10' type="range" min='0' max='1' defaultValue='0' /></div>
                <div className='ps_grid-item ps_toggle'>7:00 pm - 8:00 pm</div>
                <div className='ps_grid-item'><input onChange={(e)=>{handleOnChange(e)}} className='time_range_11' type="range" min='0' max='1' defaultValue='0' /></div>
                <div className='ps_grid-item ps_toggle'>8:00 pm - 9:00 pm</div>
                <div className='ps_grid-item'><input onChange={(e)=>{handleOnChange(e)}} className='time_range_12' type="range" min='0' max='1' defaultValue='0' /></div>
                <div className='ps_grid-item ps_toggle'>9:00 pm - 10:00 pm</div>
                <div className='ps_grid-item'><input onChange={(e)=>{handleOnChange(e)}} className='time_range_13' type="range" min='0' max='1' defaultValue='0' /></div>
            </div>
            <div></div>
          </div>
          <div className="ps_tile">
            <h2>Upcoming Appointments</h2>
          </div>
        </div>
      </div>
    );
}

export default Schedule;