import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { trackListState, trackReducer } from "../reducers";


const mergedReducers = combineReducers({
    trackList: trackReducer
});

export interface _store {
    trackList: trackListState
}

export const store = configureStore({
    reducer: mergedReducers
});
