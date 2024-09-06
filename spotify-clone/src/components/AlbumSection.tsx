import { Row, Spinner } from "react-bootstrap";
import { fetchSearch } from "../modules/fetch";
import { useEffect, useState } from "react";
import { TrackList } from "../interfaces/fetch";
import AlbumCard from "./AlbumCard";

interface props {
    searchWord: string,
    cardNumber: number,
}

const AlbumSection = (props: props) => {

    const [trackList, setTrackList] = useState<TrackList>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const handleFetch = (res: TrackList) => {
        setTrackList(res);
        setIsLoading(false);
    }

    useEffect(()=>{
        fetchSearch(props.searchWord, handleFetch)
    },[props.searchWord])

    return (
        <div className="track-card-title ">
            <h2>{props.searchWord}</h2>
            <Row
                xs={1} sm={2} lg={3} xl={4}
                className=" imgLinks py-3"
            >
                {
                    isLoading ? (
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    ) : (
                        trackList?.data.map((track, i) => {
                            if (i >= props.cardNumber)
                                return("");

                            return (<AlbumCard key={i} track={track}/>)
                        })
                    )
                }

            </Row>
        </div>
    );
};


export default AlbumSection