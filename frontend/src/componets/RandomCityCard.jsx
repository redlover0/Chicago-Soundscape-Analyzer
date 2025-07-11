import React, {useContext, useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useNavigate} from "react-router-dom";
import CommunityFinder from "../api/CommunityFinder";
import * as response from "../routes/CommunityDetails";
import {NoiseDataContext} from "../context/communitiesContext";


const RandomCityCard = () => {
    const {communities, setCommunities} = useContext(NoiseDataContext);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await CommunityFinder.get(`/random/1`);
                setCommunities(response.data);
                console.log("Here's the response you want:", response.data);
            } catch (e) {
                console.error(e);
            }
        };

        fetchData();
    }, [setCommunities, refresh]);

    const navigate = useNavigate();

    const handleCommunitySelect = (no) => {
        setRefresh(!refresh);
        if (no) {
            navigate(`/community/${no}`);
        } else {
            console.error("Community number is undefined");
        }
    };

    return (
        <div className="p-4 container-fluid">
            <div className="row">
                {communities && communities.map((community, index) => (
                    <div key={index} className="col-md-3 mb-3">
                        <Card style={{width: '18rem'}}>
                            <Card.Body>
                                <Card.Title className="capitalize-first">{community.name}</Card.Title>
                                <Card.Text>Total Pop: {community.tot_pop} Residence</Card.Text>
                                <Button
                                    style={{width: '16rem'}}
                                    variant="outline-primary"
                                    onClick={() => handleCommunitySelect(community.no)}
                                >
                                    Click to view
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RandomCityCard;