import styles from './WeatherCard.module.css';

export default function WeatherCard({ data }) {
  return (
    <div className={styles.weatherCard}>
      <h2>{data.name}, {data.sys.country}</h2>
      <p>
        <span className={styles.descriptor}>🌡️ Temperature: </span> {Math.round(data.main.temp)}°C
      </p>
      <p>
        <span className = {styles.descriptor}> ☂️ Real Feel:</span> {data.main.feels_like}°C
      </p>
      <p>
        <span className = {styles.descriptor}> ☀️ High:</span> {data.main.temp_max}°C
      </p>
      <p>
        <span className = {styles.descriptor}> ❄️ Low:  </span> {data.main.temp_min}°C
      </p>
      <p>
        <span className = {styles.descriptor}> 💧 Humidity:  </span> {data.main.humidity}%
      </p>
      <p>
        <span className = {styles.descriptor}>💨 Wind speed: </span> {data.wind.speed}m/s
      </p>
      <p>
        <span className = {styles.descriptor}>☁️ Weather Condition: </span> {data.weather[0].description}
      </p>
    </div>
  );
}