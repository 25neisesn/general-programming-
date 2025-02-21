
/* Notes on loops in javaScript

Loops are a great way to repeat a set of steps
There are two general flavors of loop in programming 
- While loops
- For loops

WHILE LOOPS:
while (condition) {
    Code Goes Here
}

This code will repeat as long as the condition is true

example 

let i = 0;
while (i < 3){
    console.log(i);
    i++;  // shorthand for i += 1 which in turn is a shorthand for i = i + 1 
}
*/
/* A single time through the loop is called an iteration
while loops will continue until their condition becomes falsy
Remember 0 is falsy */

// i is already 3 from prior loop
/*
while (i){
    console.log("banana");
    i--;
}
*/
/* There is a second flavor of while loop, called a do... while loop 
The primary difference between a do... while loop and a while loop, is that a do... while loop executes at least once 

Do... while loop structure
do {
    //code goes here
} while condition;


let a = 0;
do{
    console.log(a);
    a += 1;
} while (a < -1); 
 */

/* the other kind of loop is the FOR loop.
for loops are essentially just fancy while loops, their syntax is more complicated,
but they are more commonly used because you are less likely to set up and infinite loop

For loop structure:
for (begin; condition; sep){
    // code goes here
}

example 

for (let j = 0; j < 5; j++){
    console.log(`j = ${j}`);
}
*/
/* with either form of loop as a general rule if your condition is going to be based on a number 
you probably want to use: <, >, <=, >=
==, != are likely to enable you to accidentallt make an infinite loop
*/ 

//you can skip elements of the for loop declaration
/*
let i = 0;
for(' i < 3; i++) {
    console.log(i);
}

for(let i = 0; i < 3;){
    console.log(i++);
}

let i = 0

for(; i < 3;){
    console.log(i);
    i++;
}

for(;;){
    infinite loop
}
*/

/*Break as a command
it will immediately exit you from a loop and advance you 
to the next part of your code. You can put these in as
failsafes if you think you might create an infinate loop */

/*
let sum = 0;
let max = +prompt("Add the numbers from 1 to what?")
let now = Date.now();
console.log(now)

for (let i = 1; i <= max; i++){
    sum += i;

    if (Date.now() > now + 1000){
        console.log("This took too long");
        break;
    }
}

console.log(sum);
*/

/* Continue as a comand Coontinue is like a lighter version of break instead of ejecting you out of the loop
it just  skips to the end of the current iteration */ 

/*for (let i = 0; i < 21; i++) {
    if (i % 2 == 0){
        continue; 
    }
    console.log(i); 
}
*/
// Summary
// Three kinds of loop: For, While, Do...While 
// A Do...While loop is the only one that must execute at least once 
// break will eject you from a loop 
// continue skips the rest of the current iteration  

/* ARRAYS 
In programing an array is a collection of values. Specifically its an order collection of values. 

let arrayName = [item1, item2, item3, item4];

to make an empty array there are two seperate approches: 
let fakeArray1 = new Array();
letfakeArray2 = [];
*/

// let fruits = ["Apples", "Bananas", "Canteloupes", "Durians", "Lychees"];
// console.log(fruits);

// console.log(fruits[3])  
// // comes back duians because it starts at 0 so apples are counte as 0 and bananas are counted as 1

// fruits[3] = "Watermelons"
// console.log(fruits); 

// //add strawberries
// fruits[5] = "Strawberries";
// console.log(fruits);

// // find out how long an array is
// console.log(fruits.length);

// fruits[fruits.length] = "Dragonfruits";
// console.log(fruits);

// fruits[fruits.length] = "Blueberries";
// console.log(fruits);

// /* am array can store elements of any type including mixing types in the same array*/

// let exampleArray2 = ["Apple", 35, true, function () {console.log('hello');}, "array"];

// console.log(exampleArray2[0]);
// console.log(exampleArray2[1]);
// console.log(exampleArray2[3]);

// // do math or other operations with the values in an array
// // function to calculate distance between 2 points on x,y plane   
// let obj1 = [3, 5];
// let obj2 = [7, 11];

// let dist = Math.sqrt((obj2[0] - obj1[0])**2 + (obj2[1] -obj1[1])**2);
// console.log(dist); 

// let primes = [2, 3, 5, 7, 11, 13, 17, 19];
// let i = 0;
// while (i < primes.length){
//     console.log(primes[i]);
//     i++;
// }

// console.log(primes.at(-1)); 

// Array methods: 
// .pop() - finds last element of array returns and deletes it from array

// console.log(primes); 
// console.log(primes.pop()); 
// console.log(primes); 

// here is a code snippet to find sume of all primes less than 20

// let sum = 0;
// while (primes.length > 0){
//     sum += primes.pop();
//     console.log(primes, sum);
// }

// console.log(sum); 

// the inverse of .pop() is .push()
// .push adds an element to the end of an array

// let fruits = [ "Apple", "Banana", "Cantelope"];

// console.log(fruits);

// fruits.push("Watermelon");

// console.log(fruits); 

// the problem with pop push is that you can only modify the end of an array
// if you want to modify the beginning of an array you need different methods
// shift() - is pop but at the begininning 

// console.log(fruits.shift());
// console.log(fruits);

// unshift ( - is push but at the begininning 
// fruits.unshift("Apricot");
// console.log(fruits); 

// push and unshift can add multiple elements at once
// fruits.push("Orange", "Peach");
// fruits.unshift("Lemon", "Pineapple");

// console.log(fruits); 

// Using loops with arrays
// heres an old style of printing array values

// for (let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]); 
// }

// there is a different way to do this 

// for (let fruit of fruits ) {
//     console.log(fruit); 
// }

/* some things to know about arrays
array length is returning the vale of the last inex +1 it is not actually counting the number of values in the array */

let grades = ["A", "A", , "B", "B", "A"]; 
console.log(grades);
console.log(grades.length); 

let badArray = [];
badArray[314]= "pie"; 
console.log(badArray.length); 

console.log(badArray); 

/* Multimenisional Arrays 
multimenisional Arrays are arrays that is in turn made up of more arrays 
*/

let coordinates = [
    [3,4],
    [1,2],
    [9,15],
    [37,11], 
    [215,1]

]

console.log(coordinates[4][0]);

console.log(coordinates); 
