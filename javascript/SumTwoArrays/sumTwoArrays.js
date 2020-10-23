/*
source: https://www.codewars.com/kata/59c3e8c9f5d5e40cab000ca6
solved by: JASC and LZ
date: 23/10/2020
*/

function addArrays(array1, array2) {
  if (array1.length == 0 && array2.length == 0) return []; // If both arrays are empty, return an empty array.
  
  let arrayToNumber1 = parseInt(array1.join('')) || 0; // if empty array use zero
  let arrayToNumber2 = parseInt(array2.join('')) || 0; // if empty array use zero
  var result = String(arrayToNumber1 + arrayToNumber2).split('').map(num => parseInt(num));
  
  if (!result[0]) { // if first index is NaN, replace the first 2 index
    result.splice(0,2,result[1]*(-1));
  }
  
  return result;                                                                        
}
