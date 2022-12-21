// import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
// import reduxThunk from 'redux-thunk'
import list from './list/reducer'
import {configureStore, combineReducers} from "@reduxjs/toolkit";

const rootReducer = combineReducers({list});
const store = configureStore({
    reducer: rootReducer
});
export default store;

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// export default createStore(rootReducer, composeEnhancer(applyMiddleware(reduxThunk)));

