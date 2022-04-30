/*

The generateRandomNumber() function should accept min and max as range boundary values.

The function should generate a random whole number in the given range and return it.

The function should return error message 'Incorrect Inputs. 1st value should be less than the second', 
if the min value is greater than or equal to max value.

The function should return error message "Invalid Input Types, All Inputs Should Be of Type Number !!", 
for any non-numeric value passed to the function.

*/

module.exports = function generateRandomNumber(min,max) {
   
  // Provide Solution Code Here
  if(isNaN(min,max)){
    return "Invalid Input Types, All Inputs Should Be of Type Number !!";
  }
  else{
    if(min<max){
      var diff = max - max;
      var rand = (Math.floor(Math.random()*diff)) + min;
      return rand
    }else{
      return "Incorrect Inputs. 1st value should be less than the second";
    }
  }

}
