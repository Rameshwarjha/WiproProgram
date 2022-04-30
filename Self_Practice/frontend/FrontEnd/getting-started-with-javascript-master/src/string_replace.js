/*

The replaceString() function should accept 3 string inputs.

The function should search for second string in first string and if found should replace it with third string.

The function should return the replaced string.

The function should return error message "Invalid Input Types, All Inputs Should Be of Type String !!", 
for any non-numeric value passed to the function.

*/

module.exports = function replaceString(inputString, searchString, replaceWith) {

  // Provide Solution Code Here
  if(typeof(inputString,searchString,replaceWith)==="string"){
    if(inputString.includes(searchString)){
      let str = inputString.replace(searchString,"");
      return str+replaceWith;
    }
    else{
      return inputString;
    }
  }
  else{
    return "Invalid Input Types, All Inputs Should Be of Type String !!";
  }
}
