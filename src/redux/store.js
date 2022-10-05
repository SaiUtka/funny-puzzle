import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {toolsReducer} from "./slices/toolsSlice";


const rootReducer = combineReducers({
    toolsReducer
});

const setUpStore = () => configureStore({
    reducer: rootReducer
});

export {setUpStore};