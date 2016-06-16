var browserHistory = require('react-router').browserHistory


module.exports = function(){
	return fetch('http://localhost:7000/service',{
		method: 'get',
		headers: {
				'Content-Type': 'application/json',
		}
	}).then(function(response){
		return response.json()
	}).then(function(response){
		console.log(response.result)
		if(response.result === 'Valid Data'){
			browserHistory.push('/valid')
		}
		else
			browserHistory.push('/invalid')
		return response.result
	})
}