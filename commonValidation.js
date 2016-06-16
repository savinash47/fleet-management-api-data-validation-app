module.exports = function(vehicle){
	if(vehicle.hasOwnProperty('Year')&& vehicle.hasOwnProperty('Make')&& vehicle.hasOwnProperty('Model'))
						var year = parseInt(vehicle.Year[0])
						if(typeof(year) === "number" && year !== '' && year >= 1900)
							if(typeof(vehicle.Make[0]) === "string")
								if(typeof(vehicle.VinNumber[0])=== "string" && vin(vehicle.VinNumber[0]))
									return true
								
}

function vin(data){
	var re = /[A-HJ-NPR-Z0-9]{17}/
	return re.test(data)
}
