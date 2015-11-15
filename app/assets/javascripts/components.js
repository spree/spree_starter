require("babel-polyfill");

var React = window.React = global.React = require('react');
var ReactDOM = window.ReactDOM = require('react-dom');
var ReactDOMServer = global.ReactDOMServer = require('react-dom/server');

var App = window.App = global.App = {};

// components exposed for react-rails
App.DemoComponent = require('./components/demo_component').default;
