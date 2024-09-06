import { Col, Row } from "react-bootstrap";
import AlbumSection from "./AlbumSection";

const MyMain = () => {
    return (
        <>
            <Row>
                <Col xs={10}>
                    <AlbumSection searchWord="Queen" cardNumber={4} />
                </Col>
            </Row>
            <Row>
                <Col xs={10}>
                    <AlbumSection searchWord="Katy Perry" cardNumber={4} />
                </Col>
            </Row>
            <Row>
                <Col xs={10}>
                    <AlbumSection searchWord="Eminem" cardNumber={4} />
                </Col>
            </Row>
        </>


    );
};


export default MyMain;