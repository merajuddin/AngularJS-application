angular.module('headermodule', []).directive("headerDirective" , function(){
	return{
		restrict: 'EA',
		template:'<h1> HELLO WORLD <span>coming from the header directive</span></h1>'
	}
});