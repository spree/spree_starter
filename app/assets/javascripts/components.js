require("babel-polyfill");

var React = window.React = global.React = require('react');
var ReactDOM = window.ReactDOM = require('react-dom');
var ReactDOMServer = global.ReactDOMServer = require('react-dom/server');

var App = window.App = global.App = {};

// dumb components exposed for react-rails
App.DemoComponent = require('./components/demo_component').default;

// redux providers exposed for react-rails
App.CartProvider = require('./providers/cart_provider').default;
App.AccountProvider = require('./providers/account_provider').default;
