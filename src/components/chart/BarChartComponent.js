import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
      text: "Axis Data Bar Chart",
    },
  },
};

export default function BarChartComponent({data}) {
    const labels = data.xAxisData.map((item,index)=>item.label)

  const chartData = {
    labels,
    datasets: [
      {
        label: "X AxisData",
            data: data.xAxisData.map((item,index)=>item.value),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Y AxisData",
            data: data.yAxisData.map((item,index)=>item.value),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return <>
   <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <h2 className="text-xl font-semibold p-4">Bar Chart</h2>
      <div className="p-4">
      <Bar options={options} data={chartData} />;
      </div>
    </div>
  </>
}
