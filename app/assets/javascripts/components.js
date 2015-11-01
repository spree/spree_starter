require("babelify/polyfill");

var React = window.React = global.React = require('react');
var ReactDOM = window.ReactDOM = global.ReactDOM = require('react-dom');
var ReactDOMServer = window.ReactDOMServer = global.ReactDOMServer = require('react-dom/server');

var App = window.App = global.App = {};

App.DemoComponent = require('./components/demo_component.jsx');
