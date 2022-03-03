import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import combine from "./reducers";

const store = createStore(
  combine,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
