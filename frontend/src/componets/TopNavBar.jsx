import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useNavigate} from "react-router-dom";


const TopNavBar = () => {
    let navigate = useNavigate();
    const navigateToHome = () => {
        try {
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    }
    const navigateToAbout = () => {
        try {
            navigate('/about');
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Navbar expand="lg" className="w-full navbar navbar-expand-lg navbar-light bg-light">
            <Container>
                <Navbar.Brand href="/" className='brand'>Safe Sound</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link onClick={navigateToHome}>Home</Nav.Link>
                        <Nav.Link onClick={navigateToAbout}>About Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default TopNavBar