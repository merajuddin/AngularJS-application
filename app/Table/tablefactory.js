angular.module("tablemodule").factory("tablefactory",function(){

	var factory = {};
		
		factory.protekdata=[
				{id:1, State:"CA", city:"San Jose"},
				{id:2, State:"IL", city:"Chicago"},
				{id:3, State:"LO", city:"Los Angeles"},
				{id:4, State:"DC", city:"Seattle"},
				{id:5, State:"TX", city:"Dallas"}];


	return factory;

});