
function rot13(str) { // LBH QVQ VG!

  var rot00 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var rot13 = "NOPQRSTUVWXYZABCDEFGHIJKLM";
  var finalString = "";

  for(var i = 0; i < str.length; i++){
    var isIt = false;
    for(var j = 0; j < rot13.length; j++){

      if (str.charAt(i) === rot13.charAt(j)){
        finalString = finalString + rot00.charAt(j);
        isIt = true;
      }
    }
    if (isIt === false){
    finalString = finalString + str.charAt(i);
    }
  }
  return finalString;
}

// Change the inputs below to test
rot13("SERR CVMMN!");
