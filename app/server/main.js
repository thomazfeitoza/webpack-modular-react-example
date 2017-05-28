import express from 'express';
import config from '../config';
import { renderToString } from 'react-dom/server';
import React from 'react';
import { StaticRouter, Route } from 'react-router';
import App from '../common/app';

const app = express();

const getTemplate = ({ body, title, additionalChunk }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
      </head>
      
      <body>
        <div id="root">${renderToString(body)}</div>
        <script defer src="${config.static.url}/vendor.js"></script>
        ` +
    (additionalChunk ? `<script defer src="${config.static.url}/${additionalChunk}.js"></script>` : '') +
    `
        <script defer src="${config.static.url}/app.js"></script>
      </body>
    </html>
  `;
};


app.get('/favicon.ico', (req, res) => {
  res.status(404).end();
});

app.get('/*', (req, res) => {
  let context = {};
  let layout = (
    <StaticRouter location={req.url} context={context}>
      <Route path="/" component={App} />
    </StaticRouter>
  );
  let additionalChunk = req.path.substring(1).replace('/', '-');
  if (!additionalChunk)
    additionalChunk = 'home';

  res.send(getTemplate({
    body: layout,
    title: 'Webpack Modular React Example',
    additionalChunk: additionalChunk
  }));

});

app.listen(config.server.port);