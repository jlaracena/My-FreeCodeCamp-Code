
function largestOfFour(arr) {

  var newArr = [];

  for(var i=0; i<arr.length;i++){
    var subMax = "";

    for(var j=0; j<arr[i].length;j++){
      if(subMax<arr[i][j]){
        subMax = arr[i][j];
      }

    }
   newArr.push(subMax);
  }

return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
