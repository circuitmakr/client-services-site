import LineChart from "../../Components/Chart";
import Header from '../P_Header'

function Client_Profile() {
    return (
      <div className="App">
        <nav>
          <Header />
        </nav>
        <div className="sec progress">
          <h4>Progress</h4>
          <br />
          <hr />
          <LineChart />
        </div>
      </div>
    );
  }
  export default Client_Profile;