function destroyer(arr) {

  var args = Array.from(arguments[0]);
  var moArray = [];

  for (var i = 1; i < arguments.length; i++){
    moArray [i] = arguments[i];
  }


  function eliminate(num){

    var isEqual = false;

    for (var j =1; j < moArray.length; j++){
      if (num !== moArray[j]){
        isEqual = true;
      } else {
        return false;
      }
     }
     return isEqual;
  }
return args.filter(eliminate);
}

destroyer([3, 5, 1, 2, 2], 2, 3, 5);
