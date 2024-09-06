import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { trackListState, trackReducer } from "../reducers/trackList";
import { preferiteSongsReducer, preferiteSongsState } from "../reducers/preferiteSongs";


const mergedReducers = combineReducers({
    trackList: trackReducer,
    preferiteSongs: preferiteSongsReducer,
});

export interface _store {
    trackList: trackListState,
    preferiteSongs: preferiteSongsState,
}

export const store = configureStore({
    reducer: mergedReducers
});
