import "./Chart.css"
import { Line } from "react-chartjs-2";

function LineChart() {
  const data = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6"],
    datasets: [
      {
        type: "line",
        label: "GAD-7",
        borderColor: "black",
        backgroundColor: "black",
        tension: 0.1,
        data: [5, 5, 3, 2, 4, 1],
      },
      {
        type: "line",
        label: "PHQ-9",
        borderColor: "blue",
        backgroundColor: "blue",
        tension: 0.1,
        data: [4, 5, 0, 1, 4, 3],
      },
    ],
  };
  const options = {
    title: {
      display: true,
      text: "Testing",
    },
    tooltips: {
      displayColors: false,
      backgroundColor: "green",
    },
    scales: {
      xAxis: [
        {
          scaleLabel: {
            labelString: "Sessions",
            display: true,
          },
        },
      ],
      yAxes: [
        {
          scaleLabel: {
            labelString: "Severity",
            display: true,
          },
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="chart">
      <Line data={data} options={options} />
    </div>
  );
}
export default LineChart;
