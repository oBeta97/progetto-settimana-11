import { Track } from "../../interfaces/fetch"
import { reduxAction, ADD_TRACK_TO_PLAYLIST, REMOVE_TRACK_TO_PLAYLIST} from "../actions"

export interface customPlaylistState {
    content: Track[]
}

const initianState: customPlaylistState = {
    content: []
}

export const customPlaylistReducer = (state:customPlaylistState = initianState, action:reduxAction<Track>) =>{

    switch(action.type){

        case ADD_TRACK_TO_PLAYLIST:
            return{
                ...state,
                content: state.content.concat(action.payload),                
            }

        case REMOVE_TRACK_TO_PLAYLIST:
            return{
                ...state,
                content: state.content.filter((song) => song.id !== action.payload.id)
            }

        default:
            return state;
    }


}

