import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import MainPage from "./main-page/MainPage";
import ErrorBoundary from "./common/ErrorBoundary";
import { Route, Link, Switch } from "react-router-dom";
import NotFound from "./not-found/NotFound";
import SameMoviesByGenre from "./same-movies/SameMoviesByGenre";
import styles from "./App.css";
import Test from "./test-page/test.component";
import { Provider } from "react-redux";

const App = ({ Router, location, context, store }) => (
  <Provider store={store}>
    <Router location={location} context={context}>
      <ErrorBoundary>
        <Header />
        <div className={styles.container}>
          {/*<Switch>*/}
          {/*<Route exact path="/" component={() => <Test name='Pete'/>} />*/}
          {/*<Route exact path="/movie" component={() => <Test name='est'/>} />*/}
          {/*<Route exact path="/movie/:id" component={SameMoviesByGenre} />*/}
          {/*<Route exact path="*" component={NotFound} />*/}
          {/*</Switch>*/}
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/movie/:id" component={SameMoviesByGenre} />
            <Route exact path="*" component={NotFound} />
          </Switch>
        </div>
        {/*<Footer />*/}
      </ErrorBoundary>
    </Router>
  </Provider>
);
export default App;
