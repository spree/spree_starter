require("babel-polyfill");

var React = window.React = global.React = require('react');
var ReactDOM = window.ReactDOM = require('react-dom');
var ReactDOMServer = global.ReactDOMServer = require('react-dom/server');

var App = window.App = global.App = {};

// redux providers exposed for react-rails
App.CartProvider = require('./providers/CartProvider').default;
App.AccountProvider = require('./providers/AccountProvider').default;

if(process.env.NODE_ENV === 'development') {
  // redux dev tools panel
  App.DevToolsProvider = require('./providers/DevToolsProvider').default;
}
