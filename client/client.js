var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('../components/Main.js')
var Valid = require('../components/Valid.js')
var InValid = require('../components/InValid.js')
var Router = require('react-router').Router
var Route = require('react-router').Route
var browserHistory = require('react-router').browserHistory

ReactDOM.render(<Router history={browserHistory}>
    <Route path="/" component={Main}>
      
      <Route path="valid" component={Valid} />
      <Route path="invalid" component={InValid} />
    </Route>
  </Router>
,document.getElementById('main'));