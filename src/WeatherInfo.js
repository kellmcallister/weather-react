import React from "react";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";

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
            alt={props.data.description}
            className="current-weather-icon"
          />
        </div>
        <div className="col-4 temp-box">
          <Temperature imperial={props.data.temperature} />
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
            <span>
              Your local day and time is:{" "}
              <FormattedDate date={props.data.date} />
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
}
