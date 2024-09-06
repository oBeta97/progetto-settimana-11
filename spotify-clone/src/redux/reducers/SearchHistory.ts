import { TrackList } from "../../interfaces/fetch"
import { ADD_SEARCH_HISTORY, reduxAction } from "../actions"

export interface searchHistoryState {
    content: TrackList[]
}

const initianState: searchHistoryState = {
    content: [],
}

export const searchHistoryReducer = (state:searchHistoryState = initianState, action:reduxAction<TrackList>) =>{

    switch(action.type){

        case ADD_SEARCH_HISTORY:
            return{
                ...state,
                content: state.content.concat(action.payload),                
            }


        default:
            return state;
    }


}

