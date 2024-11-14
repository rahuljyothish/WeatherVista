import { useState, useEffect } from "react";
// eslint-disable-next-line react/prop-types
  const Forecast = ({ location }) => {
  const [forecastData, setForecastData] = useState(null);
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

  const formatDate = (timestamp) => {
  const date = new Date(timestamp * 1000); 
    return date.toISOString().split("T")[0]; 
  };
  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=metric`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch forecast data");
        }
        const data = await response.json();
        setForecastData(data);
      } catch (error) {
        console.error("Error fetching forecast data:", error);
        setForecastData(null);
      }
    };
    fetchForecast();
  }, [location, apiKey]);
  if (!forecastData) return <div>Loading forecast...</div>;
  const todayDate = formatDate(Date.now() / 1000); 
  const forecastForToday = forecastData.list.filter(
    (item) => formatDate(item.dt) === todayDate
  );
  return (
    <div className="flex justify-center lg:flex-row md:justify-center space-y-6 lg:space-y-0  mt-8">
      <div className="bg-white bg-opacity-10 p-4 rounded-lg shadow-lg w-98 lg:w-98">
        <div className="text-lg font-semibold text-slate-300 flex justify-center -mt-2">Today&apos;s Forecast</div>
        <div className="flex flex-wrap justify-center space-x-4 overflow-x-auto">
          {forecastForToday?.map((item, index) => (
            <div key={index} className="text-center min-w-[60px]">
              <div className="text-sm">
                {new Date(item.dt * 1000).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
              <img
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                alt={item.weather[0].description}
                className="w-12 h-12 mx-auto"
              />
              <div className="text-xl text-slate-300">{Math.round(item.main.temp)}°C</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forecast;
