import "./fonts/FontsFree-Net-Goldman-Bold.ttf";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createStore, combineReducers, applyMiddleware } from "redux";
import counter from "./reducer";
import allReducer from "./redux/reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

//DISPATCH
const store = createStore(allReducer, applyMiddleware(thunk));

//Display in the console
store.subscribe(() => console.log(store.getState()));

//DISPATCH
// store.dispatch(increment());
// store.dispatch(decrement());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
