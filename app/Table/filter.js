angular.module('tablemodule').filter("searchFilter",function(){
	return function(x){
		return x + " -USA";
	}

}).filter('myOrder', function(){
	var lastDigit;
  return function(number){
    if(isNaN(number) || number < 1){
      return number;
    } else {
      lastDigit = number % 10;
      if(lastDigit === 0){
      	return number + 'th'
      }else if(lastDigit === 1 && number != 11){
        return number + 'st'
      } else if(lastDigit === 2 && number != 12){
        return number + 'nd'
      } else if (lastDigit === 3 && number != 13){
        return number + 'rd'
      } else if (lastDigit > 3 || number == 11 || number == 12 || number == 13){
        return number + 'th'
      }
    }
  }
});