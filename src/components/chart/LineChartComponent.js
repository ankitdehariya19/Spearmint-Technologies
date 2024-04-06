import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Axis Data -  Line Chart",
    },
  },
};



const LineChartComponent = ({data}) => {
    const labels = data.xAxisData.map((item,index)=>item.label)
    
    const chartData = {
        labels,
        datasets: [
          {
            label: "X AxisData",
            data: data.xAxisData.map((item,index)=>item.value),
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
          {
            label: "Y AxisData",
            data: data.yAxisData.map((item,index)=>item.value),
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(53, 162, 235, 0.5)",
          },
        ],
      };
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <h2 className="text-xl font-semibold p-4">Line Chart</h2>
      <div className="p-4">
        <Line options={options} data={chartData} />;
      </div>
    </div>
  );
};

export default LineChartComponent;
