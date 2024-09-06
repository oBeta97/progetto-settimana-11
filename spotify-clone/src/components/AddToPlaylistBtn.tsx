import { Button } from "react-bootstrap";
import { FaMinus, FaPlus } from "react-icons/fa";
import { addTrackToPlaylist, removeTrackToPlaylist } from "../redux/actions";
import { useDispatch } from "react-redux";
import { Track } from "../interfaces/fetch";

interface _props {
    track: Track,
    playlist: Track[],
}

const AddToPlaylistBtn = (props: _props) => {

    const dispatch = useDispatch();

    return (
        <>
            {
                // con include non funziona sempre
                props.playlist.filter((song) => song.id === props.track.id).length === 1 ? (
                    <Button
                        className="btn-success btn-sm"
                    onClick = { () => dispatch(removeTrackToPlaylist(props.track))}
                    >
                        <FaMinus />
                    </Button >
                ) : (

                    <Button
                        className="btn-outline-success bg-transparent btn-sm"
                        onClick={() => dispatch(addTrackToPlaylist(props.track))}
                    >
                        <FaPlus />
                    </Button >
                )

            }
        </>
    );
};

export default AddToPlaylistBtn