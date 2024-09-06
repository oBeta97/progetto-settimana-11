import { Button } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import { addTrackToPreferite, removeTrackToPreferite } from "../redux/actions";
import { useDispatch } from "react-redux";
import { Track } from "../interfaces/fetch";

interface _props {
    track: Track,
    preferiteSongs: Track[],
}

const PreferiteSongBtn = (props: _props) => {

    const dispatch = useDispatch();

    return (
        <>
            {
                // con include non funziona sempre
                props.preferiteSongs.filter((song) => song.id === props.track.id).length === 1 ? (
                    <Button
                        className="btn-success btn-sm"
                    onClick = { () => dispatch(removeTrackToPreferite(props.track))}
                    >
                        <FaHeart />
                    </Button >
                ) : (

                    <Button
                        className="btn-outline-success bg-transparent btn-sm"
                        onClick={() => dispatch(addTrackToPreferite(props.track))}
                    >
                        <FaHeart />
                    </Button >
                )

            }
        </>
    );
};

export default PreferiteSongBtn