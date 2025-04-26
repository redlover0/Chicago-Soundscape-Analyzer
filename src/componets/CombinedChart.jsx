import React from 'react'
// import Chart from 'chart.js/auto';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

// the data prop that's expected with a specific structure
const data = {
    // it expects lables
    labels: ['January', 'February', 'March', 'April', 'May'],
    // and the actual data to be displayed
    datasets: [
        {
            type: 'bar', //
            label: 'Monthly Sales', //label of the data
            data: [65, 59, 80, 81, 56], // actual data
            backgroundColor: 'rgba(75,192,192,0.2)',
            borderColor: 'rgba(75,192,192,1)',
            yAxisID: 'y',
        },
        {
            type: 'line',
            label: 'Cumulative Sales',
            data: [65, 124, 204, 285, 341],
            fill: false,
            borderColor: 'rgba(153,102,255,1)',
            yAxisID: 'y2', // give the axis so i can place
        },
    ],
};

// for customization
const options = { // makes it look good
    scales: {
        y: {
            type: 'linear',
            position: 'left',
        },
        y2: {
            type: 'linear',
            display: true,
            position: 'right',
            grid: {
                drawOnChartArea: false, // only want the grid on one line
            }
        }
    },
};

const MixedChart = () => <Bar data={data} options={options} />;

export default MixedChart;
