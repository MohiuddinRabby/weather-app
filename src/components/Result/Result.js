import React from "react";
import "./Result.css";
const Result = (props) => {
//   console.log(props);
  const { temp, humidity, feels_like } = props.result;
  return (
    <div className="result-container">
      <h1>Results</h1>
      {props.weather.map((weth) => (
        <h4 key={weth.id}>{weth.main}</h4>
      ))}
      <h4>Temp: {temp} &#8451;</h4>
      <h4>Humidity: {humidity} %</h4>
      <h4>Feels like : {feels_like} &#8451;</h4>
    </div>
  );
};

export default Result;
