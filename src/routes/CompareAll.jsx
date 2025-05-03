import React, {useContext, useEffect, useState} from 'react';
import {NoiseDataContext} from "../context/communitiesContext";
import {Bar} from 'react-chartjs-2';
import CommunityFinder from "../api/CommunityFinder";
import TopNavBar from "../componets/TopNavBar";

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

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);


const CompareAll = () => {
  const {setCommunities, communities} = useContext(NoiseDataContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await CommunityFinder.get("/");
        setCommunities(response.data);
        console.log("Here's the response you want:", response.data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
  }, [setCommunities]);

  const data = {
    labels: communities.map(community => community.name),
    datasets: [
      {
        type: 'bar',
        label: 'Population',
        data: communities.map(community => community.tot_pop),
        backgroundColor: 'rgba(54, 162, 235, 0.7)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        yAxisID: 'y',
      },
      {
        type: 'line',
        label: 'Average Decibels',
        data: communities.map(communities => communities.noiselur),
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
        stacked: true,
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
        stacked: true,
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
  }

  return (
      <div>
        <TopNavBar/>
        <p className="text-center">Compare all of data</p>
      <div style={{height: '500px', width: '100%'}}>
        <Bar data={data} options={options}/>
      </div>
      </div>
  )
}

export default CompareAll