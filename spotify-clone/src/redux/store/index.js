import { combineReducers, configureStore } from "@reduxjs/toolkit";


const mergedReducers = combineReducers({

});

const store = configureStore({
    reducer: mergedReducers
});


export default store;