import React, { useEffect, useState } from "react";
import Header from "../Header";
import WeatherCompononent from "./WeatherComponent";
import axios from "axios";
import countries from "i18n-iso-countries";
import { registerLocale } from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";

registerLocale(enLocale);
const Weather = () => {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState();
  const [weatherData, setWeatherData] = useState({
    Name: `City, Country`,
    Temperature: "Nil°C",
    FeelsLike: "Nil°C",
    MaxTemp: "Nil°C",
    MinTemp: "Nil°C",
    Condition: "None",
    Humidity: "Nil%",
    Pressure: "Nil hPa",
    WindSpeed: "Nil m/s",
    Icons: "None",
    AQI: "Nil",
  });
  const accuweatherApiKey = import.meta.env.VITE_ACCUWEATHER_API_KEY;
  const openweatherApiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
  const url1 = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${accuweatherApiKey}&q=${city}`;
  const openweatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${openweatherApiKey}`;
  const handleChange = (e) => {
    const value = e.target.value;
    setCity(value);
  };
  const fetchCity = async () => {
    try {
      setLoading(true);
      if (city.trim() === "") {
        alert("Enter a City Name to get weather data.");
        return;
      }
      // const response1 = await axios.get(url1);
      // const data1= response1.data[0].Key;
      // console.log(`The response after fetching the url is: ${JSON.stringify(data1)}`);
      // const url2= `http://dataservice.accuweather.com/currentconditions/v1/${data1}?apikey=${accuweatherApiKey}`
      // const response2= await axios.get(url2);
      // const data2= response2.data[0].Temperature.Metric.Value;
      // console.log(`The temperature of city key as ${JSON.stringify(data1)} is: ${Math.floor(JSON.stringify(data2))}`);
      const openweatherResponse = await axios.get(openweatherUrl);
      const data = openweatherResponse.data;
      console.log(`The response of openweather is: ${JSON.stringify(data)}`);
      setLoading(false);
      const countryCode = data.sys.country;
      const getCountryName = (countryCode) => {
        return countryCode
          ? countries.getName(countryCode, "en")
          : "Unknown Country";
      };

      setWeatherData({
        Name: `${data.name}, ${getCountryName(countryCode)}`,
        Temperature: `${Math.floor(data.main.temp)}°C`,
        FeelsLike: `${Math.floor(data.main.feels_like)}°C`,
        Condition: `${data.weather[0].description}`,
        Humidity: `${data.main.humidity}%`,
        WindSpeed: `${data.wind.speed} m/s`,
        Pressure: `${data.main.pressure} hPa`,
        Icons: `${data.weather[0].icon}`,
        MinTemp: `${Math.floor(data.main.temp_min)}°C`,
        MaxTemp: `${Math.floor(data.main.temp_max)}°C`,
        AQI: `Data isn't available`,
      });
    } catch (err) {
      console.log(`Error while fetching the data is: ${err}`);
      alert("Wrong City Name 🤭, Kindly Enter a Valid City.");
    }
  };
  return (
    <>
      <Header />
      {/* <h1>
        Hey {Username}, I Know you came here to see weather data.However, this
        app is in development i.e; in progress so yeah, do wait till i make it
        😉.
      </h1> */}
      <WeatherCompononent
        weatherData={weatherData}
        fetchCity={fetchCity}
        city={city}
        handleChange={handleChange}
      />
    </>
  );
};
export default Weather;
