import React, {useContext, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useNavigate} from "react-router-dom";
import CommunityFinder from "../api/CommunityFinder";
import * as response from "../routes/CommunityDetails";
import {NoiseDataContext} from "../context/communitiesContext";


const CityCard = () => {
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

    const navigate = useNavigate();

    const handleCommunitySelect = (no) => {
        try {
            navigate(`/community/${no}`);
        } catch (e) {
            console.error("Community number is undefined:", e);
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
                                <Card.Text>Total residence: {community.tot_pop}</Card.Text>
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

export default CityCard;
