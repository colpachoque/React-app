function renderHTML() {
  return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>React Server Side Rendering</title>
        </head>
        <body>
          <div id="root"></div>
          <script src="bundle.js"></script>
        </body>
      </html>
  `;
}

module.exports = (req, res) => {
  res.send(renderHTML());
};
