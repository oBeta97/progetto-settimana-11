import { UnknownAction } from "redux";
import { Track } from "../../interfaces/fetch";

export const ADD_TRACK = 'ADD_TRACK';


// Purtroppo questa interfaccia è bella ma inutile :(
// Redux accetta solo le UnknownAction e non action personalizzate, credo!
export interface reduxAction<T> {
    type: string,
    payload: T
}


export const addTrack = (track: Track): UnknownAction => {
    return {
        type: ADD_TRACK,
        payload: track,
    }
}