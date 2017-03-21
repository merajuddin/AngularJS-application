angular.module('commonmodule', [])/*.controller("formcontroller", function($scope){
	$scope.phoneNumberPattern = (function() {
    var regexp = /^\(?(\d{3})\)?[ .-]?(\d{3})[ .-]?(\d{4})$/;
    return {
        test: function(value) {
            if( $scope.requireTel === false ) {
                return true;
            }
            return regexp.test(value);
        }
    };
})();

})*/.directive("myValidation", function(){
	return{
			require: 'ngModel',
			link: function(scope, element, attr, mCtrl){
				function validfunction(value){
					if ((value === "mohammed")||(value === "Mohammed")||(value === "MOHAMMED")){
						mCtrl.$setValidity("charE" , true);
					}
					else{
						mCtrl.$setValidity("charE", false);
					}
					return value;
				}

				mCtrl.$parsers.push(validfunction);

			}

	};





});