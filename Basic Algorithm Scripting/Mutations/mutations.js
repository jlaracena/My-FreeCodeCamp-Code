
function mutation(arr) {

  var positive = false;
  var arrayOfTrues = [];

  for (var j =0; j < arr[0].length; j++){
    for (var k = 0; k < arr[1].length; k++){

    if (arr[0].toLowerCase().charAt(j) === arr[1].toLowerCase().charAt(k)){
        arrayOfTrues [k] = true;
    }
    }
   }


  for (var i = 0; i < arrayOfTrues.length; i++){
    if (arrayOfTrues[i] === true && arrayOfTrues.length == arr[1].length){
      return true;
    }else{
      return false;
    }
  }
}

mutation(["hello", "hey"]);
