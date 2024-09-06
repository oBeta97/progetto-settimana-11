import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { trackListState, trackReducer } from "../reducers/trackList";
import { preferiteSongsReducer, preferiteSongsState } from "../reducers/preferiteSongs";
import { customPlaylistReducer, customPlaylistState } from "../reducers/CustomPlaylist";


const mergedReducers = combineReducers({
    trackList: trackReducer,
    preferiteSongs: preferiteSongsReducer,
    customPlaylist: customPlaylistReducer,
});

export interface _store {
    trackList: trackListState,
    preferiteSongs: preferiteSongsState,
    customPlaylist: customPlaylistState,
}

export const store = configureStore({
    reducer: mergedReducers
});
