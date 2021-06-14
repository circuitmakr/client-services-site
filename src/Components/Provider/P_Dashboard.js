import "./P_Dashboard.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { setUser } from "../../redux/authReducer";
import { useDispatch, useSelector } from "react-redux";
import Header from "./P_Header";
import { user } from "../../redux/authReducer";
import Header_mobile from "./P_Header_mobile";
import { Link } from "react-router-dom";

function P_Dashboard(props) {
  const currentUser = useSelector((store) => store.authReducer.user.username);
  const provider_id = useSelector(
    (store) => store.authReducer.user.provider_id
  );

  let [datecount, setDateCount] = useState(0);
  const [providerCalendar, setProviderCalendar] = useState([]);
  const usersession = "Session Planning";
  let today = new Date();
  const day = ["Mon", "Tues", "Wed", "Thurs", "Fri"];
  const [appday, setAppDay] = useState("");
  const [apptime, setAppTime] = useState("");
  const [bookings, setBookings] = useState([]);
  const dispatch = useDispatch();

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
  let i = 0;
  ;
  useEffect(() => {
    axios
      .get(`/api/client/provider/calendar/${provider_id}`)
      .then((res) => {
        setProviderCalendar(res.data);
        console.log("data", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios.get(`/api/provider/appointments/${provider_id}`).then((res) => {
      setBookings(res.data);
      console.log("bookings", res.data);
    });
  }, []);
 const now = new Date()
  return (
    <div>
      <nav className="header_main">
        <Header />
      </nav>
      <nav className="header_mobile">
        <Header_mobile />
      </nav>
      <div className="tiles_container">
        <div className="greeting">
          <h1>{`Welcome back, ${currentUser}`}</h1>
        </div>
        <div className="intro_text p_tile">
          <h2>Upcoming Appointments</h2>
          <div className="p_appointment_text">
          {bookings.map((e) => 
          <table className='p_table_bookings'>
            <tr>
              <td className='p_tblDate'>{e.s_date.substring(0,e.s_date.search("T"))}</td>
              <td className='p_tblWord sm'> at </td>
              <td className='p_tblTime'>{e.appointment}</td>
              <td className='p_tblWord'> with </td>
              <td className='p_tblName'>{e.name}</td>
            </tr>
          </table>)}
          </div>
        </div>
        <div className="p_calendar p_tile">
          <h2>Availability Calendar</h2>
          <nav className="ps_calendar_nav">
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

          <div className="s_calendar">
            <div className="grid-item day-1 top">
              {daysOftheWeek[i]}
              <br />
            </div>
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

        <div className="footer"></div>
      </div>
    </div>
  );
}
export default P_Dashboard;
