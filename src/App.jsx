import React from 'react';
import WeatherCard from "./components/WeatherCard";
import SearchBar from "./components/SearchBar";
import "./index.css";

function App() {
  const [weather, setWeather] = React.useState(null);

  // Add this function to handle the search
  const handleSearch = async (city) => {
    try {
      const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      if (data.cod === 200) {
        setWeather(data);
      } else {
        console.error("City not found:", data.message);
      }
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  return (
    <div className="app">
      {/* Pass the handleSearch function as a prop */}
      <SearchBar onSearch={handleSearch} />
      {weather && <WeatherCard data={weather} />}
    </div>
  );
}

export default App;