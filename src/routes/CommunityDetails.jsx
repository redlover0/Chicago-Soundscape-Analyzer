import React, {useContext, useEffect} from 'react'
import TopNavBar from "../componets/TopNavBar";
import RandomCityCard from "../componets/RandomCityCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';
import {useParams} from "react-router-dom";
import {NoiseDataContext} from "../context/communitiesContext";
import CommunityFinder from "../api/CommunityFinder";

ChartJS.register(ArcElement, Tooltip, Legend);

//
// const CompareAll = () => {
//     const {setCommunities, communities} = useContext(NoiseDataContext);
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await CommunityFinder.get("/");
//                 setCommunities(response.data);
//                 console.log("Here's the response you want:", response.data);
//             } catch (e) {
//                 console.error(e);
//             }
//         };
//
//         fetchData();
//     }, [setCommunities]);


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

const CommunityDetails = () => {
    const {id} = useParams();
    const {selectedCommunity, setSelectedCommunity} = useContext(NoiseDataContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await CommunityFinder.get(`/${id}`);
                setSelectedCommunity(response.data[0]);
                console.log("Here's the response you want:", response.data[0]);
            } catch (e) {
                console.error("Theres an error fetching single ID:", e)
            }
        };
        fetchData();
    }, [id, setSelectedCommunity]);

    return (
        <div>
            <TopNavBar/>
            {selectedCommunity ? (
                <>
                    <h1 className="padding font-container"
                        style={{textSizeAdjust: 'inherit'}}>{selectedCommunity.name}</h1>
                    <Container>
                        <Row className="text-center mx-auto">
                            <Col className="h-150">
                                <div className="h-100 d-flex flex-column align-items-center justify-content-center">
                                    <p style={{
                                        paddingLeft: "95px",
                                        fontSize: "24px",
                                        marginBottom: "-35px"
                                    }}>
                                        Averaging
                                    </p>
                                    <div className="d-flex align-items-center">
                                        <p style={{fontSize: "150px"}}>{Math.ceil(selectedCommunity.noiselur)}</p>
                                        <p style={{
                                            fontSize: "24px",
                                            alignSelf: "flex-end",
                                            marginBottom: "45px"
                                        }}>
                                            dB
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div style={{width: '400px', height: '400px'}}>
                                    <Doughnut options={options} data={data}/>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <RandomCityCard/>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default CommunityDetails