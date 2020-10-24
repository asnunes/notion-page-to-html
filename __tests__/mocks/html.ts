import base64 from './img/base64';

const STYLE_TAG = `\
<style>
  html {
    -webkit-print-color-adjust: exact;
  }
  * {
    box-sizing: border-box;
    -webkit-print-color-adjust: exact;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    line-height: 1.5;
    white-space: pre-wrap;
    font-family: system-ui, sans-serif;
    color: #37352F;
  }

  @media only screen {
    body {
      margin: 2em auto;
      max-width: 900px;
      color: rgb(55, 53, 47);
    }
  }
  
  img {
    max-width: 100%;
    max-height: 70vh;
  }

  h1,
  h2,
  h3 {
    letter-spacing: -0.01em;
    line-height: 1.2;
    font-weight: 600;
    margin-bottom: 0;
  }

  .page-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 0.75em;
  }
  
  .page-cover-image {
    display: block;
    object-fit: cover;
    width: 100%;
    height: 30vh;
  }

  h1 {
    font-size: 1.875rem;
    margin-top: 1.875rem;
  }

  h2 {
    font-size: 1.5rem;
    margin-top: 1.5rem;
  }

  h3 {
    font-size: 1.25rem;
    margin-top: 1.25rem;
  }

  .callout {
    padding: 16px 16px 16px 12px;
    display: flex;
    width: 95%;
    border-radius: 3px;
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    align-items: center;
    justify-content: center;
  }

  .callout-emoji {
      height: 21.6px;
      width: 21.6px;
      font-size: 21.6px;
      line-height: 1.1;
      margin-left: 0px;
  }

  .callout p {
      max-width: 100%;
      width: 100%;
      white-space: pre-wrap;
      word-break: break-word;
      margin-left: 8px;
  }

  .indented {
    padding-left: 1.5em;
  }
</style>
`;

const HEADER = `\
<header>
  <img class="page-cover-image" src="${base64}" style="object-position:center 40%">
  <div class="page-header-icon page-header-icon-with-cover">
    <span class="icon">🤴</span>
  </div>
  <h1 class="page-title">Simple Page Test</h1>
</header>
`;

export const FULL_DOCUMENT = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ${STYLE_TAG}
    <title>Simple Page Test</title>
    <link href="https://unpkg.com/prismjs@1.22.0/themes/prism.css" rel="stylesheet">
  </head>
  <body>
    ${HEADER}
    <p>Hello World</p>
    <script src="https://unpkg.com/prismjs@1.22.0/components/prism-core.min.js"></script>
    <script src="https://unpkg.com/prismjs@1.22.0/plugins/autoloader/prism-autoloader.min.js"></script>
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

export const DOCUMENT_WITHOUT_TITLE = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ${STYLE_TAG}
    <link href="https://unpkg.com/prismjs@1.22.0/themes/prism.css" rel="stylesheet">
  </head>
  <body>
    ${HEADER}
    <p>Hello World</p>
    <script src="https://unpkg.com/prismjs@1.22.0/components/prism-core.min.js"></script>
    <script src="https://unpkg.com/prismjs@1.22.0/plugins/autoloader/prism-autoloader.min.js"></script>
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

export const DOCUMENT_WITHOUT_CSS = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Simple Page Test</title>
    <link href="https://unpkg.com/prismjs@1.22.0/themes/prism.css" rel="stylesheet">
  </head>
  <body>
    ${HEADER}
    <p>Hello World</p>
    <script src="https://unpkg.com/prismjs@1.22.0/components/prism-core.min.js"></script>
    <script src="https://unpkg.com/prismjs@1.22.0/plugins/autoloader/prism-autoloader.min.js"></script>
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

export const DOCUMENT_METADATA = `
<!DOCTYPE html>
<html>
  <head>
    ${STYLE_TAG}
    <title>Simple Page Test</title>
    <link href="https://unpkg.com/prismjs@1.22.0/themes/prism.css" rel="stylesheet">
  </head>
  <body>
    ${HEADER}
    <p>Hello World</p>
    <script src="https://unpkg.com/prismjs@1.22.0/components/prism-core.min.js"></script>
    <script src="https://unpkg.com/prismjs@1.22.0/plugins/autoloader/prism-autoloader.min.js"></script>
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

export const DOCUMENT_WITHOUT_SCRIPTS = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ${STYLE_TAG}
    <title>Simple Page Test</title>
  </head>
  <body>
    ${HEADER}
    <p>Hello World</p>
  </body>
</html>
`;

export const FULL_DOCUMENT_WITHOUT_HEADER_IN_BODY = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ${STYLE_TAG}
    <title>Simple Page Test</title>
    <link href="https://unpkg.com/prismjs@1.22.0/themes/prism.css" rel="stylesheet">
  </head>
  <body>
    <p>Hello World</p>
    <script src="https://unpkg.com/prismjs@1.22.0/components/prism-core.min.js"></script>
    <script src="https://unpkg.com/prismjs@1.22.0/plugins/autoloader/prism-autoloader.min.js"></script>
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

export const BODY_ONLY = `<p>Hello World</p>`;

export const HEADER_WITH_TITLE_ONLY = `\
<header>
  <h1 class="page-title">This is a title</h1>
</header>
`;

export const HEADER_WITH_TITLE_AND_COVER_IMAGE = `\
<header>
  <img class="page-cover-image" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD" style="object-position:center 15%">
  <h1 class="page-title">This is a title</h1>
</header>
`;

export const HEADER_WITH_TITLE_AND_COVER_IMAGE_WITHOUT_POSITION = `\
<header>
  <img class="page-cover-image" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD" style="object-position:center 0%">
  <h1 class="page-title">This is a title</h1>
</header>
`;

export const HEADER_WITH_TITLE_COVER_IMAGE_AND_IMAGE_ICON = `\
<header>
  <img class="page-cover-image" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD" style="object-position:center 0%">
  <div class="page-header-icon page-header-icon-with-cover">
    <img class="icon" src="data:image/jpeg;base64,/4QDeRXhpZgAASUkqAAgAAAAGABIBAwA">
  </div>
  <h1 class="page-title">This is a title</h1>
</header>
`;

export const HEADER_WITH_TITLE_AND_IMAGE_ICON = `\
<header>
  <div class="page-header-icon">
    <img class="icon" src="data:image/jpeg;base64,/4QDeRXhpZgAASUkqAAgAAAAGABIBAwA">
  </div>
  <h1 class="page-title">This is a title</h1>
</header>
`;

export const HEADER_WITH_TITLE_AND_EMOJI_ICON = `\
<header>
  <div class="page-header-icon">
    <span class="icon">🤴</span>
  </div>
  <h1 class="page-title">This is a title</h1>
</header>
`;
