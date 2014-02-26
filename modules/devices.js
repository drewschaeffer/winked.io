module.exports = function() {
	var express = require("express");
	var app = express();
		
	app.get("/", function(req, res) {
		var WinkAPI = require('./winkapi');

		var clientID     = '...'
		  , clientSecret = '...'
		  , userName     = '...'
		  , passPhrase   = '...'
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