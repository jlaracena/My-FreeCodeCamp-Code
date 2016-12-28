
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArray = [];
  var i = 0;

  while (i<arr.length){
    var inefableArray = [];

    for (var j= 0; j< size; j++){

      if (arr[i+j] != null){
      inefableArray.push(arr[i+j]);
      } else {
        break;
      }
    }
    newArray.push(inefableArray);
    i = i + size;
  }
return newArray;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
