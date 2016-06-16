var landValidation = require('./landValidation.js')
var seaValidation = require('./seaValidation.js')

module.exports = function(result){
	var data = []
	result.Fleet.Vehicles.forEach(function(Vehicle){
			if(Vehicle.hasOwnProperty('Bus')){
				Vehicle.Bus.forEach(function(bus){
					data.push(landValidation(bus,result.Fleet.Country))
				})
			}
			if(Vehicle.hasOwnProperty('Truck')){
				Vehicle.Truck.forEach(function(truck){
					data.push(landValidation(truck,result.Fleet.Country))
				})
			}
			if(Vehicle.hasOwnProperty('Motorcycle')){
				Vehicle.Motorcycle.forEach(function(motorcycle){
					data.push(landValidation(motorcycle,result.Fleet.Country))
				})
			}
			if(Vehicle.hasOwnProperty('Boat')){
				Vehicle.Boat.forEach(function(boat){
					data.push(seaValidation(boat))
				})
			}
		})
	if(data.indexOf(false) !== -1){
		return false
	}
	
	return true
}
