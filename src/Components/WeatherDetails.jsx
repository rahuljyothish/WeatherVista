/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const WeatherDetails = ({ location }) => {
  const [weatherData, setWeatherData] = useState(null);

  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
      const data = await response.json();
      setWeatherData(data);
    };

    fetchWeather();
  }, [location, apiKey]);

  if (!weatherData) return <div>Loading...</div>;

  return (
    <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg w-46 -mt-4">
      <h3 className="text-xl font-semibold text-slate-300">Weather Details</h3>
      <div className="mt-4">
        <div className="flex justify-between">
          <span>Wind Speed:</span>
          <span>{weatherData.wind.speed} m/s</span>
        </div>
        <div className="flex justify-between">
          <span>Humidity:</span>
          <span>{weatherData.main.humidity} %</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
