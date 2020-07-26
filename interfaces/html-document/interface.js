class HtmlDocumentParser {
  constructor(title, body) {
    this._title = title;
    this._body = body;
  }

  getHtmlDocument() {
    return `
    <!DOCTYPE html>
    <html>
      <head>
      <title>${this._title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
        body {
          font-family: system-ui, sans-serif;
        }

        img {
          max-width: 100%;
          max-height: 70vh;
        }
      </style>
      <link href="https://myCDN.com/prism@v1.x/themes/prism.css" rel="stylesheet" />
      </head>
      <body>
        ${this._body}
        <script src="https://myCDN.com/prism@v1.x/components/prism-core.min.js"></script>
        <script src="https://myCDN.com/prism@v1.x/plugins/autoloader/prism-autoloader.min.js"></script>
        <script>
        MathJax = {
          tex: {
            inlineMath: [['$', '$']]
          }
        };
        </script>
        <script id="MathJax-script" async
          src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js">
        </script>
      </body>
    </html>
`;
  }
}

module.exports = HtmlDocumentParser;
