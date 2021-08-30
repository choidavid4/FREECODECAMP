function palindrome(str) {
  //Convert my str to lowercase, replace all non-alphanumeric characters and save to a new variable
  let newStr = str.trim().toLowerCase().replace(/[\W]|_/g,"");
  //Check wether it's a palindrome or not
  //Reverse the string and compare it with the original one
  let reversed = "";
  for(let i = newStr.length - 1; i >= 0; i--){
    reversed = reversed.concat(newStr[i]);
  }
  return (reversed == newStr);
}
palindrome("  anita lava l_a tiNa  ");