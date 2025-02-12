
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

example */
let i = 0;
while (i < 3){
    console.log(i);
    i++;  // shorthand for i += 1 which in turn is a shorthand for i = i + 1 
}

/* A single time through the loop is called an iteration
while loops will continue until their condition becomes falsy
Remember 0 is falsy */

// i is already 3 from prior loop
while (i){
    console.log("banana");
    i--;
}

/* There is a second flavor of while loop, called a do... while loop 
The primary difference between a do... while loop and a while loop, is that a do... while loop executes at least once 

Do... while loop structure
do {
    //code goes here
} while condition;
*/

let a = 0;
do{
    console.log(a);
    a += 1;
} while (a < -1); 

/* the other kind of loop is the FOR loop.
for loops are essentially just fancy while loops, their syntax is more complicated,
but they are more commonly used because you are less likely to set up and infinite loop

For loop structure:
for (begin; condition; sep){
    // code goes here
}

example */

for (let j = 0; j < 5; j++){
    console.log(`j = ${j}`);
}

/* with either form of loop as a general rule if your condition is going to be based on a number 
you probably want to use: <, >, <=, >=
==, != are likely to enable you to accidentallt make an infinite loop
*/ 

