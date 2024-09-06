import { Col } from "react-bootstrap";
import { Track } from "../interfaces/fetch";
import { useDispatch } from "react-redux";
import { addTrack } from "../redux/actions";

interface props {
    track: Track
}

const AlbumCard = function (props: props) {

    // console.log(props);

    const dispatch = useDispatch()


    return (
        <Col className="text-center">
            <img
                className="img-fluid cursor-pointer"
                src={props.track.album.cover_xl}
                alt="track"
                onClick={()=> dispatch(addTrack(props.track))}
            />
            <p>
                Track: "{props.track.title_short}"<br />
                Artist: {props.track.artist.name}
            </p>
        </Col>);
};


export default AlbumCard;