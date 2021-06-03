// import { configureStore } from '@reduxjs/toolkit'
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { content } from "./reducers";

const reducers = {
  content,
};
const rootReducer = combineReducers(reducers);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
