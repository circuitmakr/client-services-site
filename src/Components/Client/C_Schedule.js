import "./C_Schedule.css";
import Header from "./C_Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAppointment, setStatus } from "../../redux/appointmentReducer";

function Schedule() {
  let [datecount, setDateCount] = useState(0);
  const [providerCalendar, setProviderCalendar] = useState([]);
  const [server_res, setServer_Res] = useState("");
  const usersession = "Session Planning";
 
  const day = ["Mon", "Tues", "Wed", "Thurs", "Fri"];
  const [appday, setAppDay] = useState("");
  const [apptime, setAppTime] = useState("");
  const [appdate, setAppDate] = useState("");
  const dispatch = useDispatch();

  const handleLink = (e) => {
    e.preventDefault();
    setAppTime(e.target.name);
    setAppDay(e.target.id);
    setAppDate(e.target.title);
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
  let today = new Date();
  today = `${today.getDay() - 1} ${today.getMonth() + 1}/${today.getDate() + 1}/${today.getFullYear()}`;
  console.log('today', today)
  
  useEffect(() => {
    let provider_id = 29;
    axios
      .get(`/api/client/provider/calendar/${provider_id}`)
      .then((res) => {
        setProviderCalendar(res.data);
        console.log("data", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const newDate= new Date();
  console.log("provider calendar", providerCalendar);
  const calendarDate = providerCalendar?.map((e) =>
    e.cal_date.substring(0, e.cal_date.search("T"))
  );
  console.log("date", calendarDate);
  console.log("provider_calendar", providerCalendar);
  console.log('day', newDate.getDay('2021,06,03'))

  const handleAppt = () => {
    let provider_id = 29;
    let client_id = 11;
    let s_date = `{${appdate}}`;
    dispatch(setAppointment({ appday, apptime, appdate }));
    dispatch(setStatus(true));
    axios
      .post(`/api/client/appointment/${provider_id}`, {
        provider_id,
        client_id: client_id,
        s_date: s_date,
        appointment: `{{${appday}, ${apptime}}}`,
      })
      .then((res) => {
        setServer_Res(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setAppTime([]);
    setAppDay([]);
    setAppDate([]);
  };
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
            <div className="grid-item day-1 top">
              {daysOftheWeek[datecount]}
              <br />
              {calendarDate[datecount]}
            </div>
            <div className="grid-item day-2 top">
              {daysOftheWeek[datecount + 1]}
              <br />
              {calendarDate[datecount + 1]}
            </div>
            <div className="grid-item day-3 top">
              {daysOftheWeek[datecount + 2]}
              <br />
              {calendarDate[datecount + 2]}
            </div>
            <div className="grid-item day-4 top">
              {daysOftheWeek[datecount + 3]}
              <br />
              {calendarDate[datecount + 3]}
            </div>
            <div className="grid-item day-5 top">
              {daysOftheWeek[datecount + 4]}
              <br />
              {calendarDate[datecount + 4]}
            </div>
            <div className="grid-item day-6 top">
              {daysOftheWeek[datecount + 5]}
              <br />
              {calendarDate[datecount + 5]}
            </div>
            <div className="grid-item day-4 top">
              {daysOftheWeek[datecount + 6]}
              <br />
              {calendarDate[datecount + 6]}
            </div>
            <div className="grid-item day-1 bottom">
              <ul className="day_1">
                {providerCalendar[0]?.daily_schedule.map((e, i) => (
                  <li>
                    <Link
                      href="/"
                      onClick={(time) => handleLink(time)}
                      name={e}
                      title={`${calendarDate[datecount]}`}
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
                      title={`${calendarDate[datecount + 1]}`}
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
                      title={`${calendarDate[datecount + 2]}`}
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
                      title={`${calendarDate[datecount + 3]}`}
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
                      title={`${calendarDate[datecount + 4]}`}
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
                      title={`${calendarDate[datecount + 5]}`}
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
                      title={`${calendarDate[datecount + 6]}`}
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
          <div className="s_appointment">
            <div className="s_form_column first">
              <div className="s_Month">
                <span>{apptime}</span>
              </div>
            </div>
            <div className="s_form_column second">
              <span>{appday}</span>
              <div className="s_txtspr"></div>
              <span>{appdate}</span>
            </div>
            <div className="s_form_column third">
              <button onClick={handleAppt}>Book Appointment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Schedule;
