import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./Home.css";
import Result from "../Result/Result";
import Chart from "../Chart/Chart";
import key from "../../key";
const Home = () => {
  const [basicInfo, setBasicInfo] = useState({});
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState("dhaka");
  const [text, setText] = useState("");
  useEffect(() => {
    Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${key}`
    ).then((data) => {
      // console.log(data.data);
      setBasicInfo(data.data.main);
      setWeather(data.data.weather);
    });
  }, [city]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(text);
    setText("");
  };
  const onChange = (e) => {
    e.preventDefault(setText(e.target.value));
  };
  return (
    <div id="home">
      <div className="dark-overlay">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-group"
              value={text}
              onChange={onChange}
              placeholder="city name"
            />
          </form>
          <p style={{ color: "#0099ff" }} className="text-center">
            Search by any city name of any country of the world. Make sure you
            spell correct.
          </p>
          <div className="row py-5">
            <div className="col-md-6">
              <Result
                result={basicInfo}
                weather={weather}
                cityName={city}
              ></Result>
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
