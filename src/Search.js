import React, { useState } from "react";
import "./Search.css";
import axios from "axios";

export default function Search() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState(null);
  let [country, setCountry] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = "f66bf4t97048d4a637491a80237ao350";
    let units = "imperial";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(displayWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  function displayWeather(response) {
    setTemperature(response.data.temperature.current);
    setCountry(response.data.country);
    setDescription(response.data.condition.description);
    setHumidity(response.data.temperature.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
    );
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        className="city-search"
        type="search"
        placeholder="Type City Name"
        autoFocus="on"
        onChange={updateCity}
      />
      <input
        className="btn btn-success search-button"
        type="submit"
        value="Search"
      />
      <input
        className="btn btn-secondary current-button"
        type="submit"
        value="Current"
      />
    </form>
  );

  if (temperature) {
    return (
      <div className="Search">
        {form}
        <br />
        <h2 className="city-output">
          {city}, <br />
          {country}
        </h2>
        <h3 className="current-time">4:40pm</h3>
        <div className="row">
          <div className="col-4">
            <img
              src={icon}
              alt="Weather icon"
              className="current-weather-icon"
            />
          </div>
          <div className="col-4 temp-box">
            <div className="current-temp-number">{Math.round(temperature)}</div>
            <span className="current-temp">
              <a href="/">F</a> /<a href="/">C</a>
            </span>
          </div>
          <div className="col-4 properties-box">
            <div className="current-props">
              <div>
                Wind: <a href="/"> {Math.round(wind)} mph</a>
              </div>
              <div>
                Humidity: <a href="/">{humidity}%</a>
              </div>
              <div>
                Visibility: <a href="/">{description}</a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="forecast-form"></div>
      </div>
    );
  } else {
    return form;
  }
}
