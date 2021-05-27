import React from "react";
import { Line } from "react-chartjs-2";

function LineChart() {
    
  const data = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6"],
    datasets: [
      {
        type: 'line',
        label: "GAD-7",
        borderColor: "black",
        backgroundColor: "black",
        data: [5, 5, 3, 2, 4, 1],
      },
      {
        type: 'line',
        label: "PHQ-9",
        borderColor: "blue",
        backgroundColor: "blue",
        data: [4, 5, 0, 1, 4, 3],
      }
    ]};
 const options = {
  
    labels:{
        weight: 'bold'
    },
   
    title: {
      display: true,
      text: 'Testing',
    },
    tooltips: {
      displayColors: true,
      backgroundColor:'green'
    },
    scales:{
        y:
            {
                beginAtZero: true,
            },
    },
    maintainAspectRatio: false
 };
  return (
    <div className="chart">
      <Line options={options} data={data} />
    </div>
  );
}
export default LineChart;
