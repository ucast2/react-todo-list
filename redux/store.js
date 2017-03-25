import { applyMiddleware, compose, createStore } from "redux";
import reducer from "./reducer";
import logger from "redux-logger";

// add middleware
let finalCreateStore = compose(
  applyMiddleware(logger) // changed 'logger()' to 'logger'
)(createStore)

// if initialState not passed in default used ­­­­­­­­­­­v
export default function configureStore(initialState = {todos: []})
{
  return finalCreateStore(reducer, initialState);
}
