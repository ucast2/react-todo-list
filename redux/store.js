import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./reducers"; // default index.js
import logger from "redux-logger";
import thunk from "redux-thunk"; // added to list of middleware for async code

// add middleware
let finalCreateStore = compose(
  applyMiddleware(thunk, logger) // changed 'logger()' to 'logger'
)(createStore)

// if initialState not passed in default used ­­­­­­­­­­­v
export default function configureStore(initialState = {todos: [], user: {} })
{
  return finalCreateStore(rootReducer, initialState);
}
