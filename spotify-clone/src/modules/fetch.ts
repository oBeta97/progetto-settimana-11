import { TrackList } from "../interfaces/fetch";

const fetchSearch = async (q: string, callback: (result: TrackList) => void) => {
    try {
        let response = await fetch(
            'https://striveschool-api.herokuapp.com/api/deezer/search?q=' + q
        )
        if (response.ok) {
            let trackList:TrackList = await response.json()
            callback(trackList);
        } else {
            throw new Error('Error in fetching songs')
        }
    } catch (err) {
        console.log('error', err)
    }
};

export {fetchSearch};