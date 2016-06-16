var commonValidation = require('./commonValidation.js')

module.exports = function(vehicle,country){
	if(commonValidation(vehicle) && checkCountry(vehicle,country[0]))
		return true
	else
		return false
		
}

function checkCountry(vehicle,country) {
	if(country=== 'United States' && typeof(vehicle.LicensePlateNumber[0]) === "string" && vehicle.LicensePlateNumber[0].length === 6 && vehicle.hasOwnProperty('LicensePlateNumber'))
		return true
	else 
		return false
}


