import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import shuffle from '../assets/playerbuttons/shuffle.png'
import prev from '../assets/playerbuttons/prev.png'
import play from '../assets/playerbuttons/play.png'
import next from '../assets/playerbuttons/next.png'
import repeat from '../assets/playerbuttons/repeat.png'
import { useSelector } from "react-redux";
import { _store } from "../redux/store";


const MusicPlayer = () => {

    const selectedSongs = useSelector((store: _store) => store.trackList.content)


    return (
        <Container fluid className="fixed-bottom bg-container pt-1">
            <Row className="h-100">
                <Col lg={10} className="offset-lg-2">
                    <Row
                        className="h-100 align-items-center"
                    >
                        <Col xs={3} md={4}>
                            {
                                selectedSongs.length &&
                                <img
                                    src={selectedSongs[0].album.cover_xl}
                                    alt="album cover"
                                    className="ms-4"
                                    style={{ height: "4em" }}
                                />
                            }
                        </Col>
                        <Col xs={6} md={4} className="playerControls">
                            <div className="d-flex">
                                <Link to={'/'}>
                                    <img src={shuffle} alt="shuffle" />
                                </Link>
                                <Link to={'/'}>
                                    <img src={prev} alt="prev" />
                                </Link>
                                <Link to={'/'}>
                                    <img src={play} alt="play" />
                                </Link>
                                <Link to={'/'}>
                                    <img src={next} alt="next" />
                                </Link>
                                <Link to={'/'}>
                                    <img src={repeat} alt="repeat" />
                                </Link>
                            </div>
                            <div className="progress mt-3">
                                <div role="progressbar"></div>
                            </div>
                        </Col>
                        <Col xs={3} md={4}>
                            {
                                selectedSongs.length &&
                                <p className="text-light text-end">
                                    Track: "{selectedSongs[0].title_short}"<br />
                                    Artist: {selectedSongs[0].artist.name}
                                </p>
                            }
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default MusicPlayer