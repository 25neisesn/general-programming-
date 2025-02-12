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
string return true, if less than then it returns false. If equal continue to next step */

// a test of equality check if testnumber is greater than or less than or = to 6

// Make a grade generator make a variable called testGrade. Grade Range 0-59 F 60-69 D 70-79 C 80-89 B 90-100 A

let testNumber= 98
if (testNumber <= 59){
    console.log('${testNumber} Your grade is F.');

} else if (testNumber <= 69){
    console.log('${testNumber} Your grade is D.');

} else if (testNumber <= 79){
    console.log('${testNumber} Your grade is C');

} else if (testNumber <= 89){
    console.log('${testNumber} Your grade is B');

} else if (testNumber <= 100){
    console.log('${testNumber} Your grade is A')
}

// logcal operators
// modify or combine multiple logic statements
// And: && says true if both statements are true
// OR: ||    says true if one is true
// Not: !   flips the true false value 


// clothing selector based off weather
let temperature = 85;
let percipatation = false; 


