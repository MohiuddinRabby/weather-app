import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./Home.css";
import Result from "../Result/Result";
import Chart from "../Chart/Chart";
const Home = () => {
  const [location, setLocation] = useState("");
  //   useEffect(() => {
  //     Axios.get(
  //       "https://api.openweathermap.org/data/2.5/weather?q=California&APPID=10615dc32d56f42782f5a50a04f91f30"
  //     ).then((data) => console.log(data.data));
  //   }, []);
  return (
    <div className="container">
      <div className="dark-overlay">
        <div className="form">
          <form>
            <input type="text" placeholder="city name" />
          </form>
        </div>
        <div className="result">
        <Result></Result>
        </div>
        <div className="chart">
          <Chart></Chart>
        </div>
      </div>
    </div>
  );
};

export default Home;
