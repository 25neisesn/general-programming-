// /*
// A function is a set of instructions that are all packaged together.  
// This is particularly useful if you need to reuse those instructions,
// especially if you are reusing them in multiple places, or with 
// various "starting" conditions.

// function name, parameters, arguments

// function functionName(parameter1, parameter2, etc){
//     code
// }

// functionName(argument1, argument2, etc);
// */

// //make a function that returns a message about a favorite animal.

// // function favoriteAnimal(animal){
// //     return animal + " is my favorite animal!";
// // }

// // console.log(favoriteAnimal("Panda"));
// // console.log(favoriteAnimal("Ram"));
// // console.log(favoriteAnimal("Potto"));
// // console.log(favoriteAnimal("Narwhal"));

// // What happens inside a function is frequently invisible to the outside 
// // world.  This is referred to in programming as "scope".  
// // Local scope : within a function
// // Global score : the main program

// // An example to demonstrate scope
// let test1 = 1
// let test2 = 5

// function add1(num) {
//     test2 = test2 + 1
//     return num + 1;
// }

// console.log(add1(test1));
// console.log(test1);
// console.log(test2);

// // To summarize: a function can change the value of a global variable, but 
// // only if that variable is used, BY NAME, within the function.  Variables
// // that are passed as arguments to the function, will remain unchanged.

// // we can make optional parameters.

// function greetings(name = "Mr. Smith"){
//     console.log(`Hello, ${name}`);
// }

// greetings("Mr. Smith");
// greetings("Mr. Keating");
// greetings("Mrs. Heinrich");
// greetings("Stevie T.");
// greetings();


// // Anonymous function. Anonymous Functions are frequently used if a function expects to take another function as a parameter.
// //Basically, all this means is that the function does't have a function name.

// (function (){
//     alert("This is an anonymous function");
// });

// // An actual example of how you could use an anonymous function
// function logKey(event){
//     console.log(`You pressed the "${event.key}"`)
// }

// this.addEventListener("keydown", logKey);

// //^^^^ That is how we would normally achieve this goal but we can use an anonymous funtion instead

// this.addEventListener("keydown", function (event) {
//     console.log(`You pressed ${event.key}`);
// });

// //Another way to create anonymous functions is the arrow function syntax
// this.addEventListener("keydown", (event) => {
//     console.log(`You pressed ${event.key}`);
// // })

// let x = 1;

// function a() {
//     let y = 2;
//     output(x);
//     output(z);
// }

// function b() {
//     let z = 3;
//     output(x);
//     output(y);
// }

// function output(value) {
//     console.log(`Value = ${value}`);
// }

// output(x);  
// a();
// b();

// Functions can have "return values" This is something that the function sends back to the global scope 
// Some functions dont have a return value 

function randomLessThan(num) {
    let x = Math.floor(Math.random() * num);
    return x;
}

console.log(randomLessThan(4));

// produce a number between 1 and 4
console.log(randomLessThan(4) + 1)

// If you want a function to interact with something else you need a return value