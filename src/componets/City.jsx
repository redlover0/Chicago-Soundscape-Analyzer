import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {PieChart} from "./visualizations/PieChart";

function City() {
    return (
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
                    <PieChart/>
                </Col>
            </Row>
        </Container>
    );
}

export default City;