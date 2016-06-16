var React = require('react');
var extract = require('../actions/extract.js');

module.exports = React.createClass({
	handleExtract() {
		extract()
	},

	render(){
		return(<div>{this.props.children || <button onClick={this.handleExtract}>Extract</button>} </div>);
	}
})