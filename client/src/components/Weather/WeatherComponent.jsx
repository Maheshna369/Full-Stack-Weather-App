import React, { useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Weather.css";
import { BeatLoader } from "react-spinners";
import oned from "./WeatherIcons/01d.png";
import onen from "./WeatherIcons/01n.png";
import twod from "./WeatherIcons/02d.png";
import twon from "./WeatherIcons/02n.png";
import threed from "./WeatherIcons/03d.png";
import threen from "./WeatherIcons/03n.png";
import fourd from "./WeatherIcons/04d.png";
import fourn from "./WeatherIcons/04n.png";
import nined from "./WeatherIcons/09d.png";
import ninen from "./WeatherIcons/09n.png";
import tend from "./WeatherIcons/10d.png";
import tenn from "./WeatherIcons/10n.png";
import elevend from "./WeatherIcons/11d.png";
import elevenn from "./WeatherIcons/11n.png";
import thirteend from "./WeatherIcons/13d.png";
import thirteenn from "./WeatherIcons/13n.png";
import fiftyd from "./WeatherIcons/50d.png";
import fiftyn from "./WeatherIcons/50n.png";

const WeatherCompononent = (props) => {
  const handleChange = props.handleChange;
  const city = props.city;
  const fetchCity = props.fetchCity;
  const loading = props.loading;
  const weatherData = props.weatherData;
  const iconId = weatherData.Icons;
  const Username= sessionStorage.getItem("Username");
  const getIcon = (iconId) => {
    if (iconId === "01d") {
      return oned;
    } else if (iconId === "01n") {
      return onen;
    } else if (iconId === "02d") {
      return twod;
    } else if (iconId === "02n") {
      return twon;
    } else if (iconId === "03d") {
      return threed;
    } else if (iconId === "03n") {
      return threen;
    } else if (iconId === "04d") {
      return fourd;
    } else if (iconId === "04n") {
      return fourn;
    } else if (iconId === "09d") {
      return nined;
    } else if (iconId === "09n") {
      return ninen;
    } else if (iconId === "10d") {
      return tend;
    } else if (iconId === "10n") {
      return tenn;
    } else if (iconId === "11d") {
      return elevend;
    } else if (iconId === "11n") {
      return elevenn;
    } else if (iconId === "13d") {
      return thirteend;
    } else if (iconId === "13n") {
      return thirteenn;
    } else if (iconId === "50d") {
      return fiftyd;
    } else if (iconId === "50n") {
      return fiftyn;
    }
  };
  return (
    <>
    <div className="weather-container">
      <div className="greet">
        <h1>Welcome {Username} to my Weather App</h1>
      </div>
      <div className="weather-search-container">
        <input placeholder="Enter a City" onChange={handleChange} value={city} type="text" />
        <button onClick={fetchCity}>
          <SearchIcon />
        </button>
      </div>
      <div className="weather-main-info-container">
        <h1>{weatherData.Name}</h1>
        <div className="condition">
            <p>{weatherData.Condition}</p>
            <img src={getIcon(iconId)} alt="" />
          </div>
        <h3>{weatherData.Temperature}</h3>
        <p>Feels-like Temperature: {weatherData.FeelsLike}</p>
        <div className="max-min">
          <p>Min: {weatherData.MinTemp}</p>|
          <p>Max: {weatherData.MaxTemp}</p>
        </div>
      </div>
      <div className="weather-extra-info-container">
        <div className="humidity">
          <p className="unique">Humidity</p>
          <p>{weatherData.Humidity}</p>
        </div>
        <div className="wind-speed">
          <p className="unique">Wind Speed</p>
          <p>{weatherData.WindSpeed}</p>
        </div>
        <div className="AQI">
          <p className="unique">Air Quality Index</p>
          <p>{weatherData.AQI}</p>
        </div>
        <div className="pressure">
          <p className="unique">Pressure</p>
          <p>{weatherData.Pressure}</p>
        </div>
      </div>
    </div>
    <footer>
      <p>MERN Stack Weather App</p>
      <p>&copy; 2024 Maphy, Inc</p>
    </footer>
    </>
  );
};
export default WeatherCompononent;
