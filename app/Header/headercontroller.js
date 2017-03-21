angular.module('headermodule').controller("headercontroller", function($scope, commonservice, $http){
	
// getting header navigation links..........
	//$scope.navLinks=commonservice.navdata;
	

	var navdata = function(){
    commonservice.navdata().then(function(resp){
      $scope.navLinks = resp.navdata},
      function(error){});
  }
  navdata();



  
});