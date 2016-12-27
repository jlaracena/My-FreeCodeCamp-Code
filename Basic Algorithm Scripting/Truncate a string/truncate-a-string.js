function reverseString(str) {

  var i = 1;
  var string = "";

 while(str.charAt(str.lenght-i) !== ""){

    string = string.concat(str.charAt(str.length-i));
    i++;

    if(i === str.length+1){
     return string;
    }
  }
}

function truncateString(str, num) {
  // Clear out that junk in your trunk
  var finalString = "";

  if (num >= str.length){
    return str;

  } else if (num < 3){

        for( var j = 0; j < str.length ; j++){
      finalString = str[j] + finalString;

      if (finalString.length === (num)){
        return reverseString(finalString) + "..." ;
      }
    }
  } else {

    for( var i = 0; i < str.length ; i++){
      finalString = str[i] + finalString;

      if (finalString.length === (num-3)){
        return reverseString(finalString) + "..." ;
      }
    }
  }
  return "The number should be positive";
}

truncateString("Peter Piper picked a peck of pickled peppers",3);
