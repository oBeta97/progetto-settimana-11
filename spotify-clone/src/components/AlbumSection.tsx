import { Row, Spinner } from "react-bootstrap";
import { fetchSearch } from "../modules/fetch";
import { useEffect, useState } from "react";
import { TrackList } from "../interfaces/fetch";
import AlbumCard from "./AlbumCard";
import { useSelector } from "react-redux";
import { _store } from "../redux/store";

interface props {
    searchWord?: string,
    cardNumber: number,
    playlist?: boolean,
    preferite?: boolean,
}

const AlbumSection = (props: props) => {

    const [trackList, setTrackList] = useState<TrackList>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const handleFetch = (res: TrackList) => {
        setTrackList(res);
        setIsLoading(false);
    }

    useEffect(() => {
        if (props.searchWord)
            fetchSearch(props.searchWord, handleFetch)
    }, [props.searchWord])

    const playlist = useSelector((store: _store) => store.customPlaylist.content)
    const preferite = useSelector((store: _store) => store.preferiteSongs.content)

    useEffect(() => {
        if (!props.searchWord) {
            if (props.playlist) {
                setIsLoading(false);
                setTrackList({ data: playlist })
            }

            if (props.preferite) {
                setIsLoading(false);
                setTrackList({ data: preferite })
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.playlist, props.preferite, playlist, preferite])

    return (
        <div className="track-card-title ">
            <h2>{
                props.searchWord ?
                    props.searchWord :
                    props.playlist ?
                        'Playlist' :
                        'Preferite Songs'
            }</h2>
            <Row
                xs={1} sm={2} lg={3} xl={4}
                // Ho provato ad aggiungere un gap ma a quanto pare flex non gestisce bene la cosa...
                className=" imgLinks py-3 g-3"
            >
                {
                    isLoading ? (
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    ) : (
                        trackList?.data.map((track, i) => {
                            if (i >= props.cardNumber)
                                return ("");

                            return (<AlbumCard key={i} track={track} />)
                        })
                    )
                }

            </Row>
        </div>
    );
};


export default AlbumSection