import { Track } from "../../interfaces/fetch"
import { ADD_TRACK_TO_PREFERITE, reduxAction, REMOVE_TRACK_TO_PREFERITE } from "../actions"

export interface preferiteSongsState {
    content: Track[]
}

const initianState: preferiteSongsState = {
    content: []
}

export const preferiteSongsReducer = (state:preferiteSongsState = initianState, action:reduxAction<Track>) =>{

    switch(action.type){

        case ADD_TRACK_TO_PREFERITE:
            return{
                ...state,
                content: state.content.concat(action.payload),                
            }

        case REMOVE_TRACK_TO_PREFERITE:
            return{
                ...state,
                content: state.content.filter((song) => song.id !== action.payload.id)
            }

        default:
            return state;
    }


}

