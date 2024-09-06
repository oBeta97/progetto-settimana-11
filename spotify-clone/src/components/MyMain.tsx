import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AlbumSection from "./AlbumSection";

const MyMain = () => {
    return (

        <>
            <Row>
                <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
                    <Link to={'/'}>TRENDING</Link>
                    <Link to={'/'}>PODCAST</Link>
                    <Link to={'/'}>MOODS AND GENRES</Link>
                    <Link to={'/'}>NEW RELEASES</Link>
                    <Link to={'/'}>DISCOVER</Link>
                </Col>
            </Row>
            <Row>
                <Col xs={10}>
                    <AlbumSection searchWord="Queen" />
                </Col>
            </Row>
            <Row>
                <Col xs={10}>
                    <AlbumSection searchWord="Katy Perry" />
                </Col>
            </Row>
            <Row>
                <Col xs={10}>
                    <AlbumSection searchWord="Eminem" />
                </Col>
            </Row>
        </>


    );
};


export default MyMain;