
function titleCase(str) {
  var longestString = "";
  var i =0;
  
  while(i < str.length){
   var string = "";
    
    while(true){
      
     string =string.concat(str.charAt(i));
      
      if(str.charAt(i) === " "){
        string = string.charAt(0).toUpperCase()+string.slice(1).toLowerCase();
        longestString = longestString.concat(string);
        string = "";
      }
      
      i++;
    
      if(i === str.length){
        string = string.charAt(0).toUpperCase()+string.slice(1).toLowerCase();
        longestString = longestString.concat(string);
        string = "";
        break;
      }
      
    }
    
    return longestString;   
  }
}

titleCase("I'm a little tea pot");
