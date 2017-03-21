angular.module('commonmodule').service("commonservice",function($http, $q){
	
	//table data.................
	this.getdata = function(){
		var deffered = $q.defer();
		$http({
			method: 'GET',
			url: 'db.json'
		}).success(function(resp){
			deffered.resolve(resp);
		}).error(function(error){
			deffered.reject(error);
		});

		return deffered.promise;
	}


	//navigation links...........
	this.navdata = function(){
		var deffered = $q.defer();
		$http({
			method: 'GET',
			url: 'db.json'
		}).success(function(resp){
			deffered.resolve(resp);
		}).error(function(error){
			deffered.reject(error);
		});

		return deffered.promise;
	}







	/*this.protekdata=[
			{id:1, State:"CA", city:"San Jose"},
			{id:2, State:"IL", city:"Chicago"},
			{id:3, State:"LO", city:"Los Angeles"},
			{id:4, State:"DC", city:"Seattle"},
			{id:5, State:"TX", city:"Dallas"}];

	this.navdata= ["Home","About","Contact Us","Services"];*/

});