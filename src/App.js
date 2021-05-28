import "./App.css";
import LineChart from "./Components/Chart";

function App() {
  return (
    <div className="App">
      <div className="sec progress">
        <h4>Progress</h4>
        <br />
        <hr />
        <LineChart />
      </div>
    </div>
  );
}

export default App;
