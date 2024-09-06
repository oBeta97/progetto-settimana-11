import { Button, Col, Row } from "react-bootstrap";
import { Track } from "../interfaces/fetch";
import { useDispatch, useSelector } from "react-redux";
import { addTrack } from "../redux/actions";
import { FaPlus } from "react-icons/fa";
import { _store } from "../redux/store";
import PreferiteSongBtn from "./PreferiteSongBtn";
import AddToPlaylistBtn from "./AddToPlaylistBtn";

interface props {
    track: Track
}

const AlbumCard = function (props: props) {

    // console.log(props);

    const dispatch = useDispatch();

    const preferiteSongs = useSelector((store: _store) => store.preferiteSongs.content)
    const customPlaylist = useSelector((store: _store) => store.customPlaylist.content)


    return (
        <Col
            className="text-center 
                border rounded-4 border-secondary 
                d-flex flex-column justify-content-between
            "
        >
            <img
                className="img-fluid cursor-pointer"
                src={props.track.album.cover_xl}
                alt="track"
                onClick={() => dispatch(addTrack(props.track))}
            />
            <p>
                Track: "{props.track.title_short}"<br />
                Artist: {props.track.artist.name}
            </p>
            <Row className="mb-2">
                <Col>
                    <PreferiteSongBtn track={props.track} preferiteSongs={preferiteSongs} />
                </Col>
                <Col>
                    <AddToPlaylistBtn track={props.track} playlist={customPlaylist}  />
                </Col>
            </Row >
        </Col >);
};


export default AlbumCard;