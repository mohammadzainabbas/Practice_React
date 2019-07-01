import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

const productReducer = (state = [], action) => {
  return state;
};

const userReducer = (state = "", { type, payload }) => {
  switch (type) {
    case "updateUser":
      return payload;
    default:
      return state;
  }
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

const updateUserAction = {
  type: "updateUser",
  payload: {
    user: "Mohammad Zain Abbas"
  }
};

store.dispatch(updateUserAction);

// console.log(store.getState());

// const action = {
//   type: "changeState",
//   payload: {
//     newState: "New State"
//   }
// };

// store.dispatch(action);

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
