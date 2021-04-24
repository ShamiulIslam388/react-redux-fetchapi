import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import fetchReducer from "./reducers/fetchReducer";

import App from "./App";

const initialState = {
  posts: []
};

const middlewares = [thunk];
const store = createStore(
  fetchReducer,
  initialState,
  applyMiddleware(...middlewares)
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
