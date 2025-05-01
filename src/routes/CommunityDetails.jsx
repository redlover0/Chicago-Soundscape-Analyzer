import React from 'react'
import TopNavBar from "../componets/TopNavBar";
import RandomCityCard from "../componets/RandomCityCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['White Population', 'Hispanic Population', 'Black Population', 'Asian Population', 'Other Population'],
    datasets: [
        {
            label: 'Population Distribution',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#4BC0C0',
                '#9966FF',
            ],
            borderWidth: 2,
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'right',
            labels: {
                font: {
                    size: 14,
                },
                color: '#333',
            },
        },
        tooltip: {
            backgroundColor: 'rgba(0,0,0,0.7)',
            titleFont: {
                size: 16,
            },
            bodyFont: {
                size: 14,
            },
            footerFont: {
                size: 12,
            },
            padding: 10,
        },
        title: {
            display: true,
            text: 'Population Distribution by Demographic',
            font: {
                size: 18,
            },
            color: '#555'
        }
    }
}

const communityDetails = () => {
  return (
      <div>
          <TopNavBar/>
          <p className=" padding font-container" style={{ textSizeAdjust: 'inherit'}}>DOUGLAS</p>
          <Container>
              <Row className="text-center mx-auto">
                  <Col className="h-150">
                      <div
                          className="h-100 d-flex flex-column align-items-center justify-content-center"
                      >
                          <p
                              style={{
                                  paddingLeft: "95px",
                                  fontSize: "24px",
                                  marginBottom: "-35px"
                              }}
                          >
                              Averaging
                          </p>
                          <div className="d-flex align-items-center">
                              <p style={{fontSize: "150px"}}>57</p>
                              <p
                                  style={{
                                      fontSize: "24px",
                                      alignSelf: "flex-end",
                                      marginBottom: "45px"
                                  }}
                              >
                                  dB
                              </p>
                          </div>
                      </div>
                  </Col>
                  <Col>
                      <div style={{width: '400px', height: '400px'}}>
                          <Doughnut options={options} data={data}/>
                      </div>                  <
                     /Col>
              </Row>
          </Container>
          <RandomCityCard/>
      </div>
  )
}

export default communityDetails