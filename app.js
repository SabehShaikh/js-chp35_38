document.write("<h1> Functions </h1>");

document.write("<h2> Chapter 35-38 </h2>");

/* QUESTION 01
1. Write a function that displays current date & time in your
browser. */

document.write("<h2> Question 01 </h2>");

function dateAndTime() {
    var date = new Date();
    document.write(date);
}

dateAndTime();

/* QUESTION 02
2. Write a function that takes first & last name and then it
greets the user using his full name. */

document.write("<h2> Question 02 </h2>");

function greeting() {

    var firstName = prompt("Enter your first name");
    var lastName = prompt("Enter your last name");

    var fullName = firstName + " " + lastName;
    document.write("Hello There" + " " + fullName);
}

greeting();

/* QUESTION 03 
3. Write a function that adds two numbers (input by user)
and returns the sum of two numbers. */

document.write("<h2> Question 03 </h2>");

function addition() {

    var numberOne = +prompt("Enter number one");
    var numberTwo = +prompt("Enter number two");

    return numberOne + numberTwo;
}

var result = addition();
document.write("The sum is: " + " " + result);

/* QUESTION 04
4. Calculator:
Write a function that takes three arguments num1, num2
& operator & compute the desired operation. Return and
show the desired result in your browser. */


document.write("<h2> Question 04 </h2>");

function calculator(num1, num2, operator) {

    if (operator === '+') {
        return num1 + num2;
    } else if (operator === '-') {
        return num1 - num2;
    } else if (operator === '*') {
        return num1 * num2;
    } else if (operator === '/') {
        if (num2 !== 0) {
            return num1 / num2;
        } else {
            return "Cannot divide by Zero";
        }
    } else if (operator === '%') {
        if (num2 !== 0) {
            return num1 % num2;
        } else {
            return "Cannot divide by Zero";
        }
    } else {
        return "Invalid Operator!";
    }
}

var number1 = +prompt("Enter the first number");
var operator = prompt("Enter the operator (+, -, *, /, %)");
var number2 = +prompt("Enter the second number");

var result = calculator(number1, number2, operator);
document.write("The result is: " + result);

/* QUESTION 05
5. Write a function that squares its argument. */

document.write("<h2> Question 05 </h2>");
