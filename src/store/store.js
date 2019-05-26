import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware, { END } from "redux-saga";
import { reducer, rootSaga } from "../reducers/index";

const sagaMiddleware = createSagaMiddleware();
const finalCreateStore = compose(applyMiddleware(sagaMiddleware))(createStore);
// const store = initialState => {
//    const a = finalCreateStore(reducer, initialState);
//    sagaMiddleware.run(rootSaga);
//    a.runSaga = () => sagaMiddleware.run(rootSaga);
//    a.close = () => store.dispatch(END);
//    return a;
// }

const store = initialState => {
  const a = createStore(reducer, initialState, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  a.runSaga = () => sagaMiddleware.run(rootSaga);
  a.close = () => store.dispatch(END);
  return a;
};

export default store;
