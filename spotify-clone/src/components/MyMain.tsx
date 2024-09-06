import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

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
                    <div id="rock">
                        <h2>Rock Classics</h2>
                        <div
                            className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                            id="rockSection"
                        ></div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={10}>
                    <div id="pop">
                        <h2>Pop Culture</h2>
                        <div
                            className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                            id="popSection"
                        ></div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={10}>
                    <div id="hiphop">
                        <h2>#HipHop</h2>
                        <div
                            className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                            id="hipHopSection"
                        ></div>
                    </div>
                </Col>
            </Row>
        </>


    );
};


export default MyMain;