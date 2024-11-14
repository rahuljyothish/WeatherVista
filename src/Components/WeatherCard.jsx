/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const WeatherCard = ({ location }) => {
  const [weatherData, setWeatherData] = useState(null);

        const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
      const data = await response.json();
      setWeatherData(data);
    };

    fetchWeather();
  }, [location ,apiKey]);

  if (!weatherData) return <div>Loading...</div>;

  return (
    <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg w-38 -mt-2">
      <h2 className="text-3xl font-bold text-slate-300">{weatherData.name}</h2>
      <p className="text-lg text-slate-200">{weatherData.weather[0].description}</p>
      <div className="flex items-center space-x-4">
        <img
          src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
          alt={weatherData.weather[0].description}
          className="w-16 h-16"
        />
        <div className="text-4xl font-semibold text-gray-300">{Math.round(weatherData.main.temp)}°C</div>
      </div>
    </div>
  );
};

export default WeatherCard;
