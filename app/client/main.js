import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from '../common/app';

const getLayout = () => {
  return <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>
};

ReactDom.render(
  getLayout(),
  document.getElementById('root')
);