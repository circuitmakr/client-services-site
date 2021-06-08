import LineChart from "../../Components/Chart";
import Header from './P_Header'
import './P_Client_Profile.css'

function Client_Profile(props) {
    return (
      <div>
      <nav>
        <Header />
      </nav>
      <div className="p_CP_tiles_container">
        <div className="p_CP_greeting">
          <h1>{`Hello`}</h1>
        </div>
        <div className="p_CP_intro_text p_CP_tile">
          <h2>Upcoming Appointments</h2>
        </div>
        <div className="p_CP_tile">
          <h2>Availability Calendar</h2>
        </div>
        <div className="p_CP_tile">
          <h2>Assignments</h2>
        </div>
        <div className="p_CP_tile">
          <h2>Session Reviews</h2>
        </div>
      </div>
    </div>
  );
}
  export default Client_Profile;