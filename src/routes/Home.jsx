import React from 'react'
import TopNavBar from "../componets/TopNavBar";
import CityCard from "../componets/CityCard";
import BasicStatsButton from "../componets/BasicStatsButton";
import Alert from "../componets/alert";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        try {
            navigate('compareall');
        } catch (error) {
            console.error(error);
        }
    };
  return (
    <div>
        <Alert/>
        <TopNavBar/>
        <div>
            <p className="p-4 d-flex flex-column justify-content-center align-items-center min-vh-20">
                Find your community on our interactive map and discover valuable insights about your local sound
                environment.
                Start monitoring your community's noise levels today!
            </p>
            <div className="p-1">
                <Stack gap={2} className="p-3 col-md-5 mx-auto">
                    <Button onClick={handleClick} variant="danger">
                        Comparison of Total Pop and Noise Level
                    </Button>
                </Stack>
            </div>
        </div>
        <CityCard/>
    </div>
  )
}

export default Home