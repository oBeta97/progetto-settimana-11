import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { trackListState, trackReducer } from "../reducers/trackList";
import { preferiteSongsReducer, preferiteSongsState } from "../reducers/preferiteSongs";
import { customPlaylistReducer, customPlaylistState } from "../reducers/CustomPlaylist";
import { searchHistoryReducer, searchHistoryState } from "../reducers/SearchHistory";


const mergedReducers = combineReducers({
    trackList: trackReducer,
    preferiteSongs: preferiteSongsReducer,
    customPlaylist: customPlaylistReducer,
    searchHistory: searchHistoryReducer,
});

export interface _store {
    trackList: trackListState,
    preferiteSongs: preferiteSongsState,
    customPlaylist: customPlaylistState,
    searchHistory: searchHistoryState,
}

export const store = configureStore({
    reducer: mergedReducers
});
