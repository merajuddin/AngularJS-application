angular.module('tablemodule',[]).directive("mySearch", function(){
	return{
		restrict:"EAC",
		template:'<input class="input input-lg" ng-model="query" type="text" placeholder="search for city">',
		replace:true,
		link: function(scope,elem,attrs){
			elem.bind('focus', function(){
				elem.css("background-color", "skyblue");
			});

			elem.bind("blur", function(){
				elem.css("background-color", "white");
			})
			
				
		}
	}

});