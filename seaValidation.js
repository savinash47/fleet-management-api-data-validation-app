var commonValidation = require('./commonValidation.js')

module.exports = function(vehicle) {
	if(commonValidation(vehicle) && typeof(vehicle.NauticalRegistrationNumber[0]) === "string" && nautical(vehicle.NauticalRegistrationNumber[0]) && vehicle.hasOwnProperty('NauticalRegistrationNumber'))
		return true
	else 
		return false
}	

function nautical(value){
	var re = /\b\d{3}-\w{11}\b/;
	return re.test(value)
} 