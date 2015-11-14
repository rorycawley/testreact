// main.js
var React = require('react');
var ReactDOM = require('react-dom');



var name = “Rory”;

// Render the HTML of the component and put it into the right place in the DOM
ReactDOM.render( <Hello name={name} />,
    document.getElementById('container')
);

