// These are notes on conditionals in programming 

/* At its basic level, a conditional statement is just "If" -> "then"
we will see more complictaed examples but they all rely on the idea that you are checking if a condition is true and then doing something 
based on the true false nature of the condition*/

// Conditional statements rely on some form of comparison 

// comparisons in javaScript and most if not all programing languages look  like math equations

//examples
let a = 5;
console.log(5 < 3);
console.log(5 > 3);
console.log (a == 5);
console.log(a == "5");

// ! means not 
console.log(a != 3);

// you can compare strings like how you can compare numbers
console.log("Badin" > "Ross");
/* rules for string comparison
1. Compare the first characters of each string if the first character of the first string is greater then the first character of the second 
string return true, if less than then it returns false. If equal continue to next step
