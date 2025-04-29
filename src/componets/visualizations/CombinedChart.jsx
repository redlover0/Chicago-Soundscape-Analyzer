import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import {Bar} from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
    labels: ['Douglas', 'Oakland', 'Fuller Park', 'Grand Boulevard', 'Kenwood'],
    datasets: [
        {
            type: 'bar',
            label: 'Population',
            data: [20559, 6474, 2457, 22056, 17074],
            backgroundColor: 'rgba(54, 162, 235, 0.7)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            yAxisID: 'y',
        },
        {
            type: 'line',
            label: 'Average Decibels',
            data: [61, 57, 65, 60, 57],
            fill: false,
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(255, 99, 132, 1)',
            pointBorderWidth: 2,
            yAxisID: 'y2',
        },
    ],
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top',
            labels: {
                font: {
                    size: 14,
                    family: "'Helvetica', 'Arial', sans-serif",
                },
            },
        },
        title: {
            display: true,
            text: 'Comparison of Population and Noise Levels',
            font: {
                size: 20,
                weight: 'bold',
            },
        },
        tooltip: {
            callbacks: {
                label: (context) => `${context.dataset.label}: ${context.raw}`,
            },
        },
    },
    scales: {
        y: {
            type: 'linear',
            position: 'left',
            title: {
                display: true,
                text: 'Population',
                font: {
                    size: 16,
                    weight: '500',
                },
            },
            grid: {
                color: 'rgba(200, 200, 200, 0.5)',
            },
        },
        y2: {
            type: 'linear',
            position: 'right',
            title: {
                display: true,
                text: 'Decibels',
                font: {
                    size: 16,
                    weight: '500',
                },
            },
            grid: {
                drawOnChartArea: false,
            },
        },
        x: {
            title: {
                display: true,
                text: 'Communities',
                font: {
                    size: 16,
                    weight: '500',
                },
            },
            grid: {
                color: 'rgba(200, 200, 200, 0.5)',
            },
        },
    },
};

const MixedChart = () => (
    <div style={{height: '500px', width: '100%'}}>
        <Bar data={data} options={options}/>
    </div>
);

export default MixedChart;
