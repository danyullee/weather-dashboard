import React from 'react';
import WeatherCard from "./components/WeatherCard";
import SearchBar from "./components/SearchBar";
import ForecastGraph from './components/ForecastGraph';
import "./index.css";

function App() {
  const [weather, setWeather] = React.useState(null);
  const [forecast, setForecast] = React.useState(null);

  const handleSearch = async (city) => {
    try {
      const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
      
      // Fetch current weather
      const currentResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const currentData = await currentResponse.json();
      
      // Fetch 5-day forecast (3-hour intervals)
      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      const forecastData = await forecastResponse.json();

      if (currentData.cod === 200 && forecastData.cod === "200") {
        setWeather(currentData);
        setForecast(forecastData);
      } else {
        console.error("Error:", currentData.message || forecastData.message);
      }
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  return (
    <div className="app">
      <SearchBar onSearch={handleSearch} />
      {weather && <WeatherCard data={weather} />}
      {forecast && <ForecastGraph forecastData={forecast} />}
    </div>
  );
}

export default App;