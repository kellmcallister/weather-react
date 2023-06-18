import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Search(props) {
  const [searchData, setSearchData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function displayWeather(response) {
    setSearchData({
      ready: true,
      temperature: response.data.temperature.current,
      city: response.data.city,
      country: response.data.country,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      date: new Date(response.data.time * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleApiCall();
  }

  function handleApiCall() {
    const apiKey = "f66bf4t97048d4a637491a80237ao350";
    let units = "imperial";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (searchData.ready) {
    return (
      <div className="Search">
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

        <WeatherInfo data={searchData} />
        <hr />
        <div className="forecast-form"></div>
      </div>
    );
  } else {
    handleApiCall();
    return "Loading...";
  }
}
