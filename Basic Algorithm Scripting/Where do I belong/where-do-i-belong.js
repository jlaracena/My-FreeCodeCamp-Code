function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var arrSort = arr.sort(function (a, b) {return a - b;});


  for(var i = 0; i < arrSort.length; i++){
    if (num === arrSort[0]){
      return 0;
    }

    if (num >= arrSort[arrSort.length-1]){
      return arrSort.length;
    }

    if (arrSort[i] <= num && num <= arrSort[i+1]){
      return i+1;
    }
  }
}

getIndexToIns([2, 5, 10], 15);
