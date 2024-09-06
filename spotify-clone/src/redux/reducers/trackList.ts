import { Track } from "../../interfaces/fetch"
import { ADD_TRACK, reduxAction } from "../actions"

export interface trackListState {
    content: Track[]
}

const initianState: trackListState = {
    content: []
}

export const trackReducer = (state:trackListState = initianState, action:reduxAction<Track>) =>{

    switch(action.type){

        case ADD_TRACK:
            return{
                ...state,
                content:[
                    ...state.content,
                    action.payload
                ]
            }

        default:
            return state;
    }


}

