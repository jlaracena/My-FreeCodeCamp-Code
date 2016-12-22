
function findLongestWord(str) {
  var longestString = "";
  var i =0;
  
  while(i < str.length){
   var string = "";
    
    while(true){
      
     string =string.concat(str.charAt(i));
     i++;
      
        if(str.charAt(i) === " " || i === str.length){ 
        break;
        }
      }
    
      if (string.length > longestString.length){
        longestString = string;
      }
      i++;
  }
  return longestString.length;
}

findLongestWord("What if we try a super-long word such as otorhinolaryngology");
