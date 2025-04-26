import React from 'react'
import Chart from 'chart.js/auto';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
        {
            type: 'bar',
            label: 'Monthly Sales',
            data: [65, 59, 80, 81, 56],
            backgroundColor: 'rgba(75,192,192,0.2)',
            borderColor: 'rgba(75,192,192,1)',
        },
        {
            type: 'line',
            label: 'Cumulative Sales',
            data: [65, 124, 204, 285, 341],
            fill: false,
            borderColor: 'rgba(153,102,255,1)',
        },
    ],
};

const options = {
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};

const MixedChart = () => <Bar data={data} options={options} />;

export default MixedChart;
