import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useNavigate} from "react-router-dom";

const CityCard = () => {
    let navigate = useNavigate();
    const navigateTocitie = () => {
        navigate('/community');
    };

    return (
        <div className="container-fluid">
            <p className=" padding-name padding-value " style={{ textSizeAdjust: 'inherit', fontSize: "xx-large"}}> Communitys Near </p>
        <div className="d-flex flex-row-reverse gap-3 justify-content-between">
            <div className="card-container">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>New York</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button onClick={navigateTocitie} style={{ width: '16rem' }} variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>

            <div className="container-fluid">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button onClick={navigateTocitie} style={{ width: '16rem' }} variant="outline-primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>

            <div className="container-fluid">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button onClick={navigateTocitie} style={{ width: '16rem' }} variant="outline-primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>

            <div className="container-fluid">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button onClick={navigateTocitie} style={{ width: '16rem' }} variant="outline-primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
        </div>
    );
};

export default CityCard;
