// This is a comment.
// We will use a combination of comments and code to build up our notes. 

// We start by declaring a variable 
// let myName = "Jeff";
// console.log(myName);
// myName = "Steve";
// console.log(myName);

// Here is a different way to declare variable:
// const e = 2.71828;
// console.log(e);
// e = 3.1415;
// console.log(e);
//^^^^ this throws an error, because you can't change the value of a const.

// a third way to create a variable:
// var pi = 3.1415
// console.log(pi);
// pi = e;
// console.log(pi);

// var and let are interchangable, but const makes variables that can't be changed 

// we will start looking at numbers and math below
// javaScript can add
console.log(23+97)

let sumOfSix = 5 + 4 + 5 + 4 + 7 + 9;
console.log(sumOfSix);

// you can do math in the console including using variables from javascript file

//simulation of calculating percent error
const actual = 57;
let prediction = actual - 13;
let percentage = prediction / actual;
let percentError = 1 - percentage; 
console.log (percentError);

/* Starts a multiline or block */

/* Mathematical operators in javaScript
+ is addition
- is subtraction
* is multiplication
/ is division 
** is exponentiation (3**2 =9)
% is modulus 

javaScript will work like a scientific calc and apply order of operations 
*/

// There are some rules for variable names in javeScript:
// 1. The name may contain only letters digits or the symbols $, _
// 2. The first character may not be a digit
// 3. They cannot be reserved words. (you can't name a variable let, const, or console.log)

