// src/components/WeatherCard.jsx
export default function WeatherCard({ data }) {
    return (
      <div className="weather-card">
        <h2>{data.name}, {data.sys.country}</h2>
        <p>🌡️ {data.main.temp}°C</p>
        <p>💨 {data.wind.speed} m/s</p>
        <p>☁️ {data.weather[0].description}</p>
      </div>
    );
  }