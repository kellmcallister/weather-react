import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      {" "}
      <h2 className="city-output">
        {props.data.city},<br />
        {props.data.country}
      </h2>
      <div className="row">
        <div className="col-4">
          <img
            src={props.data.icon}
            alt="Weather icon"
            className="current-weather-icon"
          />
        </div>
        <div className="col-4 temp-box">
          <div className="current-temp-number">
            {Math.round(props.data.temperature)}
          </div>
          <span className="current-temp">
            <a href="/">F</a> /<a href="/">C</a>
          </span>
        </div>
        <div className="col-4 properties-box">
          <div className="current-props">
            <div>
              Wind: <a href="/"> {Math.round(props.data.wind)} mph</a>
            </div>
            <div>
              Humidity: <a href="/">{props.data.humidity}%</a>
            </div>
            <div>
              Visibility: <a href="/">{props.data.description}</a>
            </div>
          </div>
        </div>
        <div>
          <h3 className="current-time">
            Your local date and time is:
            <FormattedDate date={props.data.date} />
          </h3>
        </div>
      </div>
    </div>
  );
}
