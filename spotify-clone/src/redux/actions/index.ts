import { UnknownAction } from "redux";
import { Track } from "../../interfaces/fetch";

export const ADD_TRACK = 'ADD_TRACK';
export const ADD_TRACK_TO_PREFERITE = 'ADD_TRACK_TO_PREFERITE';
export const REMOVE_TRACK_TO_PREFERITE = 'REMOVE_TRACK_TO_PREFERITE';
export const ADD_TRACK_TO_PLAYLIST = 'ADD_TRACK_TO_PLAYLIST';
export const REMOVE_TRACK_TO_PLAYLIST = 'REMOVE_TRACK_TO_PLAYLIST';

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

export const addTrackToPreferite = (track: Track):UnknownAction => {
    return {
        type: ADD_TRACK_TO_PREFERITE,
        payload: track,
    }
}

export const removeTrackToPreferite = (track: Track):UnknownAction => {
    return {
        type: REMOVE_TRACK_TO_PREFERITE,
        payload: track,
    }
}

export const addTrackToPlaylist = (track: Track):UnknownAction => {
    return {
        type: ADD_TRACK_TO_PLAYLIST,
        payload: track,
    }
}

export const removeTrackToPlaylist = (track: Track):UnknownAction => {
    return {
        type: REMOVE_TRACK_TO_PLAYLIST,
        payload: track,
    }
}