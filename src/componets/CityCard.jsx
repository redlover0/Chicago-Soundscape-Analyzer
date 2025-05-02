import React, {useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useNavigate} from "react-router-dom";
import CommunityFinder from "../api/CommunityFinder";
import * as response from "../routes/CommunityDetails";

/**
 * CityCard is a React functional component that renders a list of community cards.
 * Each card represents a community and includes a title, description text,
 * and a button to navigate to the respective community's page. The component retrieves
 * community data through an API call and displays mock data for presentation.
 *
 * Features:
 * - Fetches community data from an API endpoint using the `useEffect` hook.
 * - Displays mock community information in a responsive card layout.
 * - Implements navigation to a specific community page using the `useNavigate` hook.
 *
 * Props: None
 *
 * State Management: None
 *
 * React Hooks:
 * - `useEffect`: Used to fetch data from the API on component mount.
 * - `useNavigate`: Utilized for navigation to community-specific pages.
 *
 * Dependencies:
 * - CommunityFinder API for data fetching.
 * - React-Bootstrap components (Card, Button) for UI rendering.
 */
const CityCard = () => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await CommunityFinder.get("/");
                console.log(response);
            } catch (e) {
                console.error(e);
            }
            if (!response.data) {
                console.log("You had an error here:" + response.data);
            }
        };
        fetchData();
    }, []);


    const navigate = useNavigate();

    const handleCommunitySelect = () => {
        navigate(`/community/`);
    };

    const mockData = [
        {
            no: 1,
            communityName: 'DOUGLAS',
            buttonText: 'Learn More',
            text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
        },
        {
            no: 2,
            communityName: 'POPS',
            buttonText: 'Learn More',
            text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
        },
        {
            no: 3,
            communityName: 'OAKLAND',
            buttonText: 'Learn More',
            text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
        },
        {
            no: 4,
            communityName: 'GRAND BOULEVARD',
            buttonText: 'Learn More',
            text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
        },
        {
            no: 5,
            communityName: 'KENWOOD',
            buttonText: 'Learn More',
            text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
        },
    ];

    return (
        <div className="p-4 container-fluid">
            <div className="row">
                {mockData.map((card, index) => (
                    <div key={index} className="col-md-3 mb-3">
                        <Card style={{width: '18rem'}}>
                            <Card.Body>
                                <Card.Title>{card.communityName}</Card.Title>
                                {card.text && <Card.Text>{card.text}</Card.Text>}
                                <Button style={{width: '16rem'}} variant="outline-primary"
                                        onClick={handleCommunitySelect}>
                                    {card.buttonText}
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
