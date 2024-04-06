import React, { useEffect, useState } from "react";
import ChartAPIService from "../services/ChartAPIService";
import LineChartComponent from "./chart/LineChartComponent";
import BarChartComponent from "./chart/BarChartComponent";
import Loader from "./common/Loader";

const ChartComponent = () => {
  const [chartData, setChartData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const yAxisData = await ChartAPIService.getYAxisData();
        const xAxisData = await ChartAPIService.getXAxisData();
        setChartData({
          yAxisData: yAxisData.slice(0, 50),
          xAxisData: xAxisData.slice(0, 50),
        });
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mx-auto max-w-7xl p-8">
      <h1 className="text-3xl font-bold mb-8">Charts</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div className=" w-full">
          <div className="py-2">
            <LineChartComponent data={chartData} />
          </div>
          <div className="py-2">
            <BarChartComponent data={chartData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChartComponent;
