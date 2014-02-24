var app = angular.module('winked', []);


// create the "my-dir" directive 
app.directive("radialgauge", function() {
	console.log("rg");
  return {
    restrict: "E",        // directive is an Element (not Attribute)

    scope: {              // set up directive's isolated scope
      id: "@",
      value: "=",        // amount var passed by value 
      max: "@",        // amount var passed by value 
      height: "@" 
    },

  template:  "<div title='{{value}}'></div>", // replacement HTML (can use our scope vars here)
      
    replace: true,        // replace original markup with template
   
    link: function (scope, element, attrs, controller) {
    	console.log(attrs.height, attrs.max, attrs.value);
    		$("#" + scope.id).igRadialGauge({
			    height: scope.height,
			    width: scope.height,
			    maximumValue: scope.max,
				value: scope.value
			});
    
    	scope.$watch("value", function(newValue, oldValue, srcScope) {
    		$("#" + scope.id).igRadialGauge("option", "value", newValue);
		});
    }
  }
});   

/*
    scope: {              // set up directive's isolated scope
      
      value: "@",        // amount var passed by value 
      max: "@",        // amount var passed by value 
      height: "@" 
    },
      ",
       transclude: false,    // do not copy original HTML content
    */