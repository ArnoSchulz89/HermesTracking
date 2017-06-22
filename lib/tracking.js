var request = require('request')




exports.getTracking = function(barcode, callback){
	setTimeout(function(){
		var options = {
			url: 'https://hermestest-dev.apigee.net/tracking/devportal/events?barcode='+ barcode,
			headers: {
				'apiKey': 'Mo9ILZ1MFroWqdyNQ9O82xxRr4s6pUul'
			}
		}
		request.get(options, callback)
	},0);
	
};



/*function myCb(error, response, body) {
	if (!error && response.statusCode == 200) {
		var latest = JSON.parse(body)[0];
		console.log(latest.point.description);
  	}
}*/

//exports.getTracking('0000000000000010', myCb);