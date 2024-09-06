import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyMainTopLinks = () => {
    return (
        <Row className="mb-3">
            <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
                <Link to={'/'}>TRENDING</Link>
                <Link to={'/'}>PODCAST</Link>
                <Link to={'/'}>MOODS AND GENRES</Link>
                <Link to={'/'}>NEW RELEASES</Link>
                <Link to={'/'}>DISCOVER</Link>
            </Col>
        </Row>
    );
};

export default MyMainTopLinks;