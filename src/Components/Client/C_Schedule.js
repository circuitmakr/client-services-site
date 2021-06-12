import "./C_Schedule.css";
import Header from "./C_Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux'
import {setAppointment, setStatus } from "../../redux/appointmentReducer";


function Schedule() {
  let [datecount, setDateCount] = useState(0);
  const [providerCalendar, setProviderCalendar] = useState([]);
  const usersession = "Session Planning";
  let today = new Date();
  const day = ["Mon", "Tues", "Wed", "Thurs", "Fri"];
  const [appday, setAppDay] = useState("");
  const [apptime, setAppTime] = useState("");
  const dispatch = useDispatch()

  const handleLink = (e) => {
    e.preventDefault();
    setAppDay(e.target.name);
    setAppTime(e.target.id);
  };
  const daysOftheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let i = 0
  
  today = `${day[today.getDay()-1]} ${today.getMonth() + 1}/${
    today.getDay() - 1
  }/${today.getFullYear()}`;
let now = new Date()
  useEffect(() => {
    let provider_id = 29;
    axios
      .get(`/api/client/provider/calendar/${provider_id}`)
      .then((res) => {
        setProviderCalendar(res.data);
        console.log('data', res.data)
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log("provider calendar", providerCalendar);
  const { cal_date } = providerCalendar;
  console.log(cal_date);
  console.log('provider_calendar', providerCalendar)

  const handleAppt=()=>{
    let provider_id = 29;
    let client_id = 11;
    let s_date = today
    dispatch(setAppointment({appday,apptime}))
    dispatch(setStatus(true))
    axios.post(`/api/client/appointment/${provider_id}`,{
      client_id: client_id, 
      s_date: s_date, 
      appointment: {appday,apptime}
    })
     .then((res)=>{
       console.log(res.data)
     })
     .catch((err)=>{
       console.log(err)
     })
    setAppTime([])
    setAppDay([])
  }
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
          <div className="s_current_date">
            {/* <h4>{`Today is ${day[today.getDay()-1]} ${today.getMonth()+1}/${today.getDay()-1}/${today.getFullYear()}`}</h4> */}
            <nav className="s_calendar_nav">
              <div
                onClick={() =>
                  setDateCount(datecount > 0 ? datecount - 1 : (datecount = 0))
                }
                className="s_calendar_btn left"
              ></div>
              <div
                onClick={() => setDateCount(0)}
                className="s_calendar_btn today"
              >
                <i class="fa fa-calendar-day"></i>
              </div>
              <div
                onClick={() => setDateCount(datecount + 1)}
                className="s_calendar_btn right"
              ></div>
            </nav>
          </div>
          <div className="s_calendar">
            <div className="grid-item day-1 top">{daysOftheWeek[i]}<br/></div>
            <div className="grid-item day-2 top">{daysOftheWeek[i + 1]}</div>
            <div className="grid-item day-3 top">{daysOftheWeek[i + 2]}</div>
            <div className="grid-item day-4 top">{daysOftheWeek[i + 3]}</div>
            <div className="grid-item day-5 top">{daysOftheWeek[i + 4]}</div>
            <div className="grid-item day-6 top">{daysOftheWeek[i + 5]}</div>
            <div className="grid-item day-4 top">{daysOftheWeek[i + 6]}</div>
            <div className="grid-item day-1 bottom">
              <ul className="day_1">
                {providerCalendar[0]?.daily_schedule.map((e, i) => (
                  <li>
                    <Link
                      href="/"
                      onClick={(time) => handleLink(time)}
                      name={e}
                      id="Sunday"
                    >
                      {" "}
                      {e}{" "}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="day_1"></ul>
            </div>
            <div className="grid-item day-2 bottom">
              <ul className="day_2">
                {providerCalendar[1]?.daily_schedule.map((e, i) => (
                  <li>
                    <Link
                      href="/"
                      onClick={(time) => handleLink(time)}
                      name={e}
                      id="Monday"
                    >
                      {" "}
                      {e}{" "}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="day_2"></ul>
            </div>
            <div className="grid-item day-3 bottom">

            <ul className="day_3">
                {providerCalendar[2]?.daily_schedule.map((e, i) => (
                  <li>
                    <Link
                      href="/"
                      onClick={(time) => handleLink(time)}
                      name={e}
                      id="Tuesday"
                    >
                      {" "}
                      {e}{" "}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="day_3"></ul>
            </div>
            <div className="grid-item day-4 bottom">

            <ul className="day_4">
                {providerCalendar[2]?.daily_schedule.map((e, i) => (
                  <li>
                    <Link
                      href="/"
                      onClick={(time) => handleLink(time)}
                      name={e}
                      id="Wednesday"
                    >
                      {" "}
                      {e}{" "}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="day_4"></ul>
            </div>
            <div className="grid-item day-5 bottom">

            <ul className="day_5">
                {providerCalendar[3]?.daily_schedule.map((e, i) => (
                  <li>
                    <Link
                      href="/"
                      onClick={(time) => handleLink(time)}
                      name={e}
                      id="Thursday"
                    >
                      {" "}
                      {e}{" "}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="day_5"></ul>
            </div>
            <div className="grid-item day-6 bottom">
            <ul className="day_6">
                {providerCalendar[4]?.daily_schedule.map((e, i) => (
                  <li>
                    <Link
                      href="/"
                      onClick={(time) => handleLink(time)}
                      name={e}
                      id="Friday"
                    >
                      {" "}
                      {e}{" "}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="day_6"></ul>
            </div>
            <div className="grid-item day-7 bottom">

            <ul className="day_7">
                {providerCalendar[5]?.daily_schedule.map((e, i) => (
                  <li>
                    <Link
                      href="/"
                      onClick={(time) => handleLink(time)}
                      name={e}
                      id="Saturday"
                    >
                      {" "}
                      {e}{" "}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="day_7"></ul>

            </div>
          </div>
        </div>

        <div className="s_tile">
          <h2>Book an Appointment</h2>
          <div className='s_appointment'>
            <div className='s_form_column first'>
              <div className='s_Month'>
                  <span>{apptime}</span>
                </div>
            </div>
            <div className='s_form_column second'>
              <span>{appday}</span>
            </div>
            <div className='s_form_column third'>
              <button onClick={handleAppt}>Book Appointment</button>
            </div>
          </div>

        </div>
        <div className='footer'>

        </div>
      </div>
    </div>
  );
}
export default Schedule;
