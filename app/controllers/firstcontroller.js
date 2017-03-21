angular.module("controllersmodule").controller("firstController", function($scope){
	//variables
	$scope.firstName="Mohammed";
	$scope.myshoppinglist = ["Tv","i-Phone","Ferrari","Jaguar"];
	$scope.myinfo={
		"FirstName":"Mohammed",
		"LastName":"Merajuddin",
		"Profession": "Web Developer",
		"income":"140k"
	};

	$scope.showmytable= true;

	$scope.hidetable = function(){
		$scope.showmytable = false;
	};
	$scope.showtable = function(){
		$scope.showmytable = true;
	}
});