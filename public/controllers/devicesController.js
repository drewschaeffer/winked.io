
var devicesController = function($scope, $rootScope, $http) {
  
  $scope.toDate = function(dt) {
  		return new Date(parseInt(dt) * 1000).toLocaleString();
  };

  $scope.tempType = "f";
  
  $scope.tempToDisplay = function(c) {
      if ($scope.tempType == "f") {
  		  var f = c * 9 / 5 + 32; //Multiply by 9, then divide by 5, then add 32
  		  return f;
      }
      else {
        return c;
      }
  }; 

	$scope.setTemp = function(t) {
		console.log('setting temp: ' + t);
		//$("#radialGauge").igRadialGauge("option", "value", parseFloat(t));
	};

  $scope.getDevices = function() {
  	console.log('get');
  	$http.get('/api/devices').success(function(data, status, headers, config) {
  		console.log(data);
  		$scope.devices = data;


  	});
  };

   $scope.devices = $scope.getDevices();

   $scope.tempGuageOptions = { height: "500px", width: "100%", maximumValue: 100 };
};

var tempController = function($scope, $rootScope) {
    $scope.tempUnits = "c"; // 'f' or 'c'

    $scope.tempToDisplay = function(c) {
      if ($scope.tempUnits == "f") {
        var f = c * 9 / 5 + 32; //Multiply by 9, then divide by 5, then add 32
        return f;
      }
      else {
        return c;
      }
  }; 
};

var spotterController = function($scope, $rootScope) {
  $scope.settings = { showTemperature: true, showHumidity: true };
 
  $scope.tempUnits = 'f';
};
