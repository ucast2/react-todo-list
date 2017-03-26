import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./reducers"; // default index.js
import logger from "redux-logger";

// add middleware
let finalCreateStore = compose(
  applyMiddleware(logger) // changed 'logger()' to 'logger'
)(createStore)

// if initialState not passed in default used ­­­­­­­­­­­v
export default function configureStore(initialState = {todos: [], user: {} })
{
  return finalCreateStore(rootReducer, initialState);
}
