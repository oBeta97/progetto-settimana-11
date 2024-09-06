import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { _store } from "../redux/store";
import { useState } from "react";
import { FaBackward, FaExchangeAlt, FaForward, FaPlay, FaRandom } from "react-icons/fa";


const MusicPlayer = () => {

    const selectedSongs = useSelector((store: _store) => store.trackList.content)
    const [selectedIndex, setSelectedIndex] = useState<number>(0);


    const handleClick = (isNext: boolean) => {
        if (
            selectedIndex + 1 === selectedSongs.length ||
            (selectedIndex === 0 && !isNext)
        ) {
            setSelectedIndex(0);
            return;
        }

        if (!isNext) {
            setSelectedIndex(selectedIndex - 1)
            return;
        }

        setSelectedIndex(selectedIndex + 1)
    }

    return (
        <Container fluid className="fixed-bottom bg-container pt-1">
            <Row className="h-100">
                <Col lg={10} className="offset-lg-2">
                    <Row
                        className="h-100 align-items-center"
                    >
                        <Col xs={3} md={4}>
                            {
                                selectedSongs[selectedIndex] &&
                                <img
                                    src={selectedSongs[selectedIndex].album.cover_xl}
                                    alt="album cover"
                                    className="ms-4"
                                    style={{ height: "4em" }}
                                />
                            }
                        </Col>
                        <Col xs={6} md={4} className="playerControls">
                            <div className="d-flex text-light">
                                    <FaRandom />
                                    <FaBackward className="cursor-pointer" onClick={() => handleClick(false)} />
                                    <FaPlay />
                                    <FaForward className="cursor-pointer" onClick={() => handleClick(true)} />
                                    <FaExchangeAlt />
                            </div>
                            <div className="progress mt-3">
                                <div role="progressbar"></div>
                            </div>
                        </Col>
                        <Col xs={3} md={4}>
                            {
                                selectedSongs[selectedIndex] &&
                                <p className="text-light text-end">
                                    Track: "{selectedSongs[selectedIndex].title_short}"<br />
                                    Artist: {selectedSongs[selectedIndex].artist.name}
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