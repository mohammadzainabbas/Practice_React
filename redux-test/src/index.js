import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { combineReducers, createStore } from "redux";

const productReducer = (state = [], action) => {
  return state;
};

const userReducer = (state = "", action) => {
  return state;
};

const allReducers = combineReducers({
  products: productReducer,
  users: userReducer
});

const store = createStore(
  allReducers,
  {
    products: [{ name: "iPhone" }],
    users: "M Zain Abbas"
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// console.log(store.getState());

// const action = {
//   type: "changeState",
//   payload: {
//     newState: "New State"
//   }
// };

// store.dispatch(action);

console.log(store.getState());

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
