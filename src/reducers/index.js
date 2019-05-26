import { combineReducers } from "redux";
import movies from "./movies.reducer";
import search from "./search.reducer";
import { movieSaga } from "../actions/movies.action";
import { all } from "redux-saga/effects";

export const reducer = combineReducers({
  movies,
  search
});

function* rootSaga() {
  yield all([movieSaga()]);
}

export { rootSaga };
