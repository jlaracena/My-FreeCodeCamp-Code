function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var miniWord = "";

  for(var i =1; i < str.length; i++){
    var theLetter = str[str.length-i];
    miniWord = theLetter + miniWord;

    if (miniWord === target){
      return true;
    } else if (theLetter === " " ) {
      return false;
    }
   }
   return false;
 }

confirmEnding("He has to give me a new name", "name");
