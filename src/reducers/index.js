import { combineReducers } from "redux";
import movies from "./movies.reducer";
import search from "./search.reducer";

export const reducer = combineReducers({
  movies,
  search
});
