/*
Function repeatStringNumTimes repeats a given string str (first argument) 
for num times (second argument) without using the built-in .repeat() method. 
Return an empty string if num is not a positive number.
*/


// IF and FOR Loops

function repeatStringNumTimes(str, num) {
  let newStr = "";
  if (num < 0){
    return ""
  }
  for (let i=0; i<num; i++){
    newStr += str;
  } 
  return newStr
}
