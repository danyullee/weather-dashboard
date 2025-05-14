import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Title,
  BarElement,
  BarController
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Title,
  BarElement,
  BarController
);

export default function ForecastGraph({ forecastData }) {
  // Process data with precipitation probability
  const chartData = {
    labels: forecastData.list.map(item => 
      new Date(item.dt * 1000).toLocaleTimeString([], { hour: '2-digit' })
    ),
    datasets: [
      {
        type: 'line',
        label: 'Temperature (°C)',
        data: forecastData.list.map(item => item.main.temp),
        borderColor: '#FF6384',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        yAxisID: 'y',
        tension: 0.3
      },
      {
        type: 'line',
        label: 'Humidity (%)',
        data: forecastData.list.map(item => item.main.humidity),
        borderColor: '#36A2EB',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        yAxisID: 'y1'
      },
      {
        type: 'bar',
        label: 'Precipitation %',
        data: forecastData.list.map(item => item.pop * 100), // Convert 0-1 to 0-100%
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        yAxisID: 'y2'
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '5-Day Forecast with Precipitation Probability',
        font: { size: 16 }
      },
      tooltip: {
        callbacks: {
          label: (context) => 
            `${context.dataset.label}: ${context.parsed.y}${context.datasetIndex === 2 ? '%' : ''}`
        }
      }
    },
    scales: {
      x: { title: { display: true, text: 'Time' } },
      y: { 
        title: { display: true, text: 'Temperature (°C)' },
        position: 'left' 
      },
      y1: { 
        title: { display: true, text: 'Humidity (%)' },
        position: 'right',
        grid: { drawOnChartArea: false },
        min: 0,
        max: 100
      },
      y2: {
        title: { display: true, text: 'Precipitation %' },
        position: 'right',
        grid: { drawOnChartArea: false },
        min: 0,
        max: 100,
        afterFit: (scale) => {
          scale.paddingRight = 20; // Prevent axis overlap
        }
      }
    }
  };

  return (
    <div className="forecast-graph">
      <Line data={chartData} options={options} />
    </div>
  );
}