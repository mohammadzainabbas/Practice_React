import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import LoggedInReducer from "./LoggedInReducer";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: LoggedInReducer
});

export default allReducers;
