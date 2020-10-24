export const STYLE = `\
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

  .icon {
    display: inline-block;
    max-width: 1.2em;
    max-height: 1.2em;
    text-decoration: none;
    vertical-align: text-bottom;
    margin-right: 0.5em;
  }

  img.icon {
    border-radius: 3px;
  }
  
  .page-cover-image {
    display: block;
    object-fit: cover;
    width: 100%;
    height: 30vh;
  }

  .page-header-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  .page-header-icon-with-cover {
    margin-top: -0.72em;
    margin-left: 0.07em;
  }
  
  .page-header-icon img {
    border-radius: 3px;
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
