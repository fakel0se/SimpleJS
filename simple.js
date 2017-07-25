(function (scope) {
	var Simple = {};
	// object storing our data
	Simple.data = {};
	Simple.functions = {};
	//function to set our data
	Simple.setData = function (obj) {
		this.data = obj;
	}
	
	//function to get our data
	Simple.getData = function () {
		console.log(data);
		return this.data;
	}
	
	//function to set our data
	Simple.setFunc = function (func) {
		this.functions = func ;
	}
	
	//function to get our data
	Simple.getFunc = function () {
		console.log(functions);
		return this.functions;
	}
	
	
	//Our framework to window scope
	scope.Simple = Simple;
})(this);