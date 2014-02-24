module.exports = function() {
	var express = require("express");
	var app = express();
		
	app.get("/", function(req, res) {
		var WinkAPI = require('./winkapi');

		var clientID     = '5747a2deae46cebdfff5788b99d8074e'
		  , clientSecret = '4147e99e641dc8661fead86a7e89bf80'
		  , userName     = 'andrew.p.schaeffer@gmail.com'
		  , passPhrase   = '1123drew'
		  , winkapi;

		winkapi = new WinkAPI.WinkAPI({ clientID: clientID, clientSecret: clientSecret }).login(userName, passPhrase, function(err) {
  			
  			if (!!err) res.send(500, 'login error: ' + err.message);  
			
			winkapi.getDevices(function(err, devices) {
			    if (!!err) res.send(500, 'getDevices: ' + err.message);

			    res.send(devices);
			   
			});
		});
	});

	return app;
}();