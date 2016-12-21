
function palindrome(str) {

  //clean the string
  str = str.replace(/\s+/g, '');
  str = str.replace(/\./g, '');
  str = str.replace(/\,/g, '');
  str = str.replace(/\_/g, '');
  str = str.replace(/\-/g, '');
  str = str.replace(/\//g, '');
  str = str.replace(/\(/g, '');
  str = str.replace(/\)/g, '');
  str = str.toLowerCase();

  //create a new string for comparing
  var strReverse = str;

  // crear var's for reverse string for comparing
  var i = 1;
  var string = "";


 while(strReverse.charAt(strReverse.lenght-i) !== ""){

    string = string.concat(strReverse.charAt(strReverse.length-i));

    i++;

     // when finished to reverse the string for comparing, start to compare if boith string are palindrome
     if(i === strReverse.length+1){

       // if they are equals, true, if not, false.
       if (str === string){

         return true;

       } else {

         return false;
       }

    }

 }
}
