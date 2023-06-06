import React, { useState } from "react";
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
    let apiKey = "b3967db1b6cb07823c5b7912b9ec0e6c";
    let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(displayWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  function displayWeather(response) {
    setTemperature(response.data.main.temp);
    setCountry(response.data.sys.country);
    setDescription(response.data.weather[0].main);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
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
          {city}, {country}
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
              <a href="#">F</a> /<a href="#">C</a>
            </span>
          </div>
          <div className="col-4 properties-box">
            <div className="current-props">
              <div>
                Wind: <a href="#"> {Math.round(wind)} mph</a>
              </div>
              <div>
                Humidity: <a href="#">{humidity}%</a>
              </div>
              <div>
                Visibility: <a href="#">{description}</a>
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
