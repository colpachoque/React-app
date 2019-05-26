import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./components/App";
import store from "./store/store";

function renderHTML(html, preloadedState, paths) {
  return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>React Server Side Rendering</title>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" >
          <link href="${paths.css}" rel="stylesheet" type="text/css">
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(
            /</g,
            "\\u003c"
          )}
          </script>
          <script src="${paths.js}"></script>
        </body>
      </html>
  `;
}

export default function serverRenderer() {
  return (req, res) => {
    const context = {};
    const initialStore = {
      movies: {
        movies: [],
        movie: null
      },
      search: {
        searchTerm: ""
      }
    };

    const renderRoot = () => (
      <App
        context={context}
        location={req.url}
        Router={StaticRouter}
        store={serverStore}
      />
    );

    if (req.url.includes("search") && req.url.includes("genres")) {
      initialStore.search = {
        searchBy: "genres"
      };
    }
    const serverStore = store(initialStore);

    renderToString(renderRoot());
    // context.url will contain the URL to redirect to if a <Redirect> was used
    if (context.url) {
      res.writeHead(302, {
        Location: context.url
      });
      res.end();
      return;
    }

    // const htmlString = renderToString(renderRoot());
    const paths = {
      css: req.url.includes("movie") ? "../main.css" : "main.css",
      js: req.url.includes("movie") ? "../bundle.js" : "bundle.js"
    };

    const htmlString = renderToString(renderRoot());
    const preloadedState = serverStore.getState();

    res.send(renderHTML(htmlString, preloadedState, paths));
  };
}
