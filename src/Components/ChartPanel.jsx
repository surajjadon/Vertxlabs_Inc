import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useMemo } from 'react';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip);

const getDummyData = (label) => {
  return {
    label,
    data: Array.from({ length: 7 }, () => Math.floor(Math.random() * 2000)),
    borderColor: 'white',
    tension: 0.4,
    fill: false,
    pointBackgroundColor: 'white',
  };
};

const ChartPanel = ({ metric, timeRange, extras }) => {
  const labels = ['Mar 1', 'Mar 5', 'Mar 10', 'Mar 15', 'Mar 20', 'Mar 25', 'Mar 30'];

  const chartData = useMemo(() => {
    const datasets = [getDummyData(metric), ...extras.map(getDummyData)];
    return {
      labels,
      datasets,
    };
  }, [metric, extras]);

  const options = {
    plugins: {
      legend: {
        labels: {
          color: 'white',
        },
      },
    },
    scales: {
      x: {
        ticks: { color: 'white' },
        grid: { color: '#333' },
      },
      y: {
        ticks: { color: 'white' },
        grid: { color: '#333' },
      },
    },
  };

  return (
    <div className="bg-[#131313] p-4 rounded-xl border border-[#2a2a2a]">
      <div className="flex justify-between items-center mb-4">
        <p className="text-lg font-semibold">{metric}</p>
        <p className="text-sm text-gray-400">{timeRange}</p>
      </div>
      <h2 className="text-3xl font-bold mb-1">13.49K</h2>
      <p className="text-green-400 text-sm mb-4">+469% (897)</p>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default ChartPanel;
