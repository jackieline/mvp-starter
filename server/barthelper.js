const request = require('request');

var bartCaller = function(orig, dest, callback) {
	request(`http://api.bart.gov/api/sched.aspx?cmd=depart&orig=${orig}&dest=${dest}&date=now&key=MW9S-E7SL-26DU-VV8V&b=0&a=3&l=1&json=y`, function(error, response, body) {
		if (error) {
			console.log('bart error', error);
			callback(error, null);
		} else {
			callback(null, JSON.parse(body).root.schedule.request.trip);
		}
	});
    
    

}


module.exports.bartCaller = bartCaller;