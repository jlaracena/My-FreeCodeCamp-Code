
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

reverseString("Greetings from Earth");
