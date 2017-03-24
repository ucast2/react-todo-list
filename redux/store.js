import { createStore } from "redux";
import reducer from "./reducer";

// add middleware

// if initialState not passed in default used ­­­­­­­­­­­v
export default function configureStore(initialState = {todos: []})
{
  return createStore(reducer, initialState)
}
