import { Col } from "react-bootstrap";
import { Track } from "../interfaces/fetch";

interface props {
    track: Track
}

const AlbumCard = function (props:props) {

    // console.log(props);

    return (
        <Col className="text-center">
            <img className="img-fluid" src={props.track.album.cover_xl} alt="track" />
            <p>
                Track: "{props.track.title_short}"<br />
                Artist: {props.track.artist.name}
            </p>
        </Col>);
};


export default AlbumCard;