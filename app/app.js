// Include Main React dependencies

var React = require('react');
var ReactDOM = require('react-dom');

// Include React components

// var Header = require('./Components/header.js');
// var Results = require('./Components/results.js');
// var Search = require('./Components/search.js');


ReactDOM.render(

	<div className ='main-container'>

		<Header />
		<Results />
		<Search />

	</div>,
	document.getElementByID('app')
)