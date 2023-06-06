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
        type="search"
        placeholder="Enter a city..."
        onChange={updateCity}
      />
      <input type="submit" value="Search" />
    </form>
  );

  if (temperature) {
    return (
      <div className="Weather">
        {form}
        <br />
        <h2>
          {city}, {country}
        </h2>
        <ul>
          <li>Temp: {Math.round(temperature)} deg F</li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity} %</li>
          <li>Wind: {Math.round(wind)} mph</li>
          <img src={icon} alt="Weather icon" />
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
