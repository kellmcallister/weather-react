import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  let [ready, setReady] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  function displayForecast(response) {
    setForecastData(response.data);
    setReady(true);
  }
  function day() {
    let date = new Date(forecastData.daily[0].time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  if (ready) {
    console.log(forecastData);
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col-2 forecast-column">
            <div className="forecast-icon">
              <img
                src={forecastData.daily[0].condition.icon_url}
                className="forecast-icon"
                description={forecastData.daily[0].condition.icon}
              />
            </div>
            <div className="forecast-day">{day()}</div>
            <span className="temp-min">
              {Math.round(forecastData.daily[0].temperature.minimum)}°
            </span>{" "}
            -{" "}
            <span className="temp-max">
              {Math.round(forecastData.daily[0].temperature.maximum)}°
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    let city = props.city;
    const apiKey = "f66bf4t97048d4a637491a80237ao350";
    let units = "imperial";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(displayForecast);
    return null;
  }
}
