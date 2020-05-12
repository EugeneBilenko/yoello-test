import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import createApi from "../api";
import reducers from "./reducers";

const api = createApi((...args) => store.dispatch(...args));

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk.withExtraArgument(api)),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

export default store;
