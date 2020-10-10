export const FULL_DOCUMENT = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
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
    <title>Simple Page Test</title>
    <link href="https://myCDN.com/prism@v1.x/themes/prism.css" rel="stylesheet">
  </head>
  <body>
    <p>Hello World</p>
    <iframe id="ytplayer" type="text/html" width="640" height="360" src="https://www.youtube.com/watch?v=xBFqxBfLJWc" frameborder="0"/>
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

export const DOCUMENT_WITHOUT_TITLE = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
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
    <link href="https://myCDN.com/prism@v1.x/themes/prism.css" rel="stylesheet">
  </head>
  <body>
    <p>Hello World</p>
    <iframe id="ytplayer" type="text/html" width="640" height="360" src="https://www.youtube.com/watch?v=xBFqxBfLJWc" frameborder="0"/>
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

export const DOCUMENT_WITHOUT_CSS = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Simple Page Test</title>
    <link href="https://myCDN.com/prism@v1.x/themes/prism.css" rel="stylesheet">
  </head>
  <body>
    <p>Hello World</p>
    <iframe id="ytplayer" type="text/html" width="640" height="360" src="https://www.youtube.com/watch?v=xBFqxBfLJWc" frameborder="0"/>
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

export const DOCUMENT_METADATA = `
<!DOCTYPE html>
<html>
  <head>
    <style>
        body {
          font-family: system-ui, sans-serif;
        }
        
        img {
          max-width: 100%;
          max-height: 70vh;
        }
    </style>
    <title>Simple Page Test</title>
    <link href="https://myCDN.com/prism@v1.x/themes/prism.css" rel="stylesheet">
  </head>
  <body>
    <p>Hello World</p>
    <iframe id="ytplayer" type="text/html" width="640" height="360" src="https://www.youtube.com/watch?v=xBFqxBfLJWc" frameborder="0"/>
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

export const DOCUMENT_WITHOUT_SCRIPTS = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
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
    <title>Simple Page Test</title>
  </head>
  <body>
    <p>Hello World</p>
    <iframe id="ytplayer" type="text/html" width="640" height="360" src="https://www.youtube.com/watch?v=xBFqxBfLJWc" frameborder="0"/>
  </body>
</html>
`;

export const BODY_ONLY =
  '<p>Hello World</p>\n<iframe id="ytplayer" type="text/html" width="640" height="360" src="https://www.youtube.com/watch?v=xBFqxBfLJWc" frameborder="0"/>';
