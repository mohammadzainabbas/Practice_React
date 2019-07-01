import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import productReducer from "./reducers/productReducer";
import userReducer from "./reducers/userReducer";

//All reducers
const allReducers = combineReducers({
  products: productReducer,
  user: userReducer
});

//Store with initial state
const store = createStore(
  allReducers,
  {
    products: [{ name: "iPhone" }],
    user: "M Zain Abbas"
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//Action to update user
const updateUserAction = {
  type: "updateUser",
  payload: {
    user: "Mohammad Zain Abbas"
  }
};

//Dispatch functions dispatches the action been passed and updates the store
store.dispatch(updateUserAction);

// console.log(store.getState());

// const action = {
//   type: "changeState",
//   payload: {
//     newState: "New State"
//   }
// };

// store.dispatch(action);

//Console logging the state in the store
console.log(store.getState());

//Console logging the enviornment details
console.log(process.env.NODE_ENV);

//Wrapping our app with Provider (this enable our react app to use/access redux store)
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
