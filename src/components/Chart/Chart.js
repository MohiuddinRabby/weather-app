import React from "react";
import "./Chart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
const Chart = (props) => {
  console.log(props);
  const { temp, humidity, feels_like } = props.result;
  const data = [
    {
      name: "Temp",
      pv: temp,
    },
    {
      name: "Humid",
      pv: humidity,
    },
    {
      name: "Feels",
      pv: feels_like,
    },
  ];
  return (
    <div className="chart-container">
      <h1>Chart</h1>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#0086b3"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
};

export default Chart;
