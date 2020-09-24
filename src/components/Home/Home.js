import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./Home.css";
import Result from "../Result/Result";
import Chart from "../Chart/Chart";
const Home = () => {
  const [basicInfo, setBasicInfo] = useState({});
  const [weather, setWeather] = useState([]);
  useEffect(() => {
    Axios.get(
      "https://api.openweathermap.org/data/2.5/weather?q=dhaka&units=metric&APPID=10615dc32d56f42782f5a50a04f91f30"
    ).then((data) => {
      // console.log(data.data);
      setBasicInfo(data.data.main);
      setWeather(data.data.weather);
    });
  }, []);
  return (
    <div id="home">
      <div className="dark-overlay">
        <div className="container">
          <form>
            <input type="text" className="form-group" placeholder="city name" />
          </form>
          <div className="row py-5">
            <div className="col-md-6">
              <Result result={basicInfo} weather={weather}></Result>
            </div>
            <div className="col-md-6">
              <Chart></Chart>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
