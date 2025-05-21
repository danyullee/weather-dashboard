# Weather Dashboard 🌦️

A responsive web application that displays current weather data and forecast trends using the OpenWeatherMap API.

![Weather Dashboard Preview](./screenshot.png) *Add your screenshot here*

## Features ✅

### Implemented
- **City Search Functionality**
  - Search for current weather conditions in any city worldwide
  - Error handling for invalid city names
- **Current Weather Display**
  - Temperature (°C) with feels-like comparison
  - Humidity percentage
  - Wind speed (m/s)
  - Weather condition description
- **Forecast Visualization**
  - Temperature trend graph (24-hour period)
  - Humidity progression chart
  - Precipitation probability bars

### In Progress 🚧
- 5-day extended forecast cards
- Interactive weather map overlay
- Temperature unit toggle (°C/°F)
- Air quality index display

## Tech Stack ⚙️

**Frontend**
- React + Vite
- Chart.js (Data visualization)
- CSS Modules (Styling)

**APIs**
- OpenWeatherMap Current Weather Data
- OpenWeatherMap 5-Day Forecast

**Dev Tools**
- GitHub Actions (CI/CD)
- ESLint + Prettier (Code quality)
- React Testing Library (Unit tests)

## Installation 💻

1. Clone repository:
   ```bash
   git clone https://github.com/danyullee/weather-dashboard.git
   cd weather-dashboard
2. npm install
3. Create .env file using VITE_WEATHER_API_KEY=your_openweathermap_api_key
4. npm run dev
