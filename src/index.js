import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import fetchReducer from "./reducers/fetchReducer";

import App from "./App";

const initialState = {
  posts: []
};

const store = createStore(fetchReducer, initialState);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
