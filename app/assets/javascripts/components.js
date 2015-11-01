require("babelify/polyfill");

var React = window.React = global.React = require('react');
var ReactDOM = window.ReactDOM = global.ReactDOM = require('react-dom');
var ReactDOMServer = window.ReactDOMServer = global.ReactDOMServer = require('react-dom/server');

var DemoComponent = require('./components/demo_component.js');

window.DemoComponent = global.DemoComponent = DemoComponent;
