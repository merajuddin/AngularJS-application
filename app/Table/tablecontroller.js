angular.module('tablemodule').controller("tablecontroller", function($scope, commonservice, $timeout, $rootScope,$http){

	//$scope.newBranch={};
  $rootScope.x=10;


	//timeout function using $timeout service.
  /*$timeout(function() {
    alert('hello');
  }, 3000);*/


  //getting the data from the service......
	//$scope.protekBranches = commonservice.protekdata;


  //getting the table data from the db.json file within the controller.....
  /*$http({
    method: 'GET',
      url : 'db.json'})
  .success(function(resp){
      $scope.protekBranches= resp.mydata})
  .error(function(error){
      console.log("Error occured")});
*/
  
  //deleting the data from the table..........
	$scope.deleteItem = function(index){
		$scope.protekBranches.splice(index, 1);
	}



	/* ADD items to the Table(other way hard coded)......
	$scope.Additem = function(){
		$scope.protekBranches.push({
			State:"New Jearsy",
			city:"Atlantic city"
		})
	};*/


//GETTING THE table data from the db.json file through the commmon service..........
        /*to add a filter in controller(inject $filter in controller) 
       & then $scope.protekBranches.State = $filter("uppercase")($scope.protekBranches.State)!*/
  var getdata = function(){
    commonservice.getdata().then(function(resp){
      $scope.protekBranches = resp.mydata;
    },
      function(error){});
  }
  getdata();

//Adding the new data to the table...........
	$scope.addRow = function(){		
	$scope.protekBranches.push({ 'State':$scope.State, 'city': $scope.city});
	//$scope.protekBranches.push($scope.newBranch);
	//$scope.newBranch{};

	$scope.State='';
	$scope.city='';
}





// JS CODE FOR TODO APP........
	$scope.tasks = [];
    $scope.editIndex = false;
    $scope.addTask = function () {
        if( $scope.editIndex === false){
            $scope.tasks.push({task: $scope.task, done: false})
        } else {
            $scope.tasks[$scope.editIndex].task = $scope.task;
        }
        $scope.editIndex = false;
        $scope.task = '';
    }
        
    $scope.editTask = function (index) {
      $scope.task = $scope.tasks[index].task;
      $scope.editIndex = index;
    }
    $scope.doneTask = function (index) {
      $scope.tasks[index].done = true;
    }
    $scope.unDoneTask = function (index) {
      $scope.tasks[index].done = false;
    }
    $scope.deleteTask = function (index) {
      $scope.tasks.splice(index, 1);
    }

	
	

  
});