import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducer } from "../reducers/index";

const finalCreateStore = compose(applyMiddleware(thunk))(createStore);
const store = finalCreateStore(reducer);

export default store;
