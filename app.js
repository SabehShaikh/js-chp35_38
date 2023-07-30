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

function square(num) {

    var square = num * num;
    document.write("square is: " + " " + square);
}

square(5);

/* QUESTION 06
6. Write a function that computes factorial of a number. */

document.write("<h2> Question 06 </h2>");

function factorial(num) {
    if (num == 0) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }

}
var number = +prompt("Enter no whose factorial you want");
var result = factorial(number)
document.write("factorial is " + " " + result);

/* QUESTION 07
7. Write a function that take start and end number as inputs
& display counting in your browser. */

document.write("<h2> Question 07 </h2>");

function counting() {

    var startNumber = +prompt("Enter start number");
    var endNumber = +prompt("Enter end number");

    for (var i = startNumber; i <= endNumber; i++) {
        document.write(i + " ");
    }
}

counting();

/* QUESTION 08
8. Write a nested function that computes hypotenuse of a
right angle triangle.
Hypotenuse2 = Base2 + Perpendicular2
Take base and perpendicular as inputs.
Outer function : calculateHypotenuse()
Inner function: calculateSquare() */

document.write("<h2> Question 08 </h2>");

function calculateHypotenuse(base, perpendicular) {

    function calculateSquare(side) {
        return side * side
    }

    var baseSquare = calculateSquare(base);
    var perpendicularSquare = calculateSquare(perpendicular);
    var hypotenuseSquare = baseSquare + perpendicularSquare;
    var hypotenuse = Math.sqrt(hypotenuseSquare);

    return hypotenuse;

}
var baseInput = +prompt("Enter the base of the right angle triangle");
var perpendicularInput = +prompt("Enter the perpendicular of the right angle triangle");

var result = calculateHypotenuse(baseInput, perpendicularInput);

document.write("Hypotenuse of the right angle triangel is: " + " " + result);

/* QUESTION 09
9. Write a function that calculates the area of a rectangle.
A = width * height
Pass width and height in following manner:

i. Arguments as value
ii. Arguments as variables */

document.write("<h2> Question 09 </h2>");

function areaOfRectangle(width, height) {

    return width * height;

}

var result = areaOfRectangle(3, 4);
document.write("Area is " + " " + result);

/* QUESTION 10
10. Write a JavaScript function that checks whether a passed
string is palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as
forward, e.g., madam. */

document.write("<h2> Question 10 </h2>");

function palindrome(str) {

    str = str.toLowerCase();
    str = str.replace(/[^a-z0-9]/g, "");

    var reversedStr = str.split("").reverse().join("");

    return str === reversedStr;
}

var string = prompt("Enter a string to check if it's a palindrome");

var result = palindrome(string);

if (result) {
    document.write("The string " + " " + string + " is a palindrome");
} else {
    document.write("The string " + " " + string + " is not a palindrome");
}

/* QUESTION 11
11. Write a JavaScript function that accepts a string as a
parameter and converts the first letter of each word of the
string in upper case.
EXAMPLE STRING : 'the quick brown fox'
EXPECTED OUTPUT : 'The Quick Brown Fox' */

document.write("<h2> Question 11 </h2>");

function capatilize(str) {

    var words = str.split(" ");

    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    var capitalizedString = words.join(" ");
    return capitalizedString;
}

var string = prompt("Enter a string to capitalize the first letter of each word");
var result = capatilize(string)

document.write("Original String: " + string + "</br>");
document.write("Converted String: " + result);

/* QUESTION 12
12. Write a JavaScript function that accepts a string as a
parameter and find the longest word within the string.
EXAMPLE STRING : 'Web Development Tutorial'
EXPECTED OUTPUT : 'Development' */

document.write("<h2> Question 12 </h2>");

function longestWord(str) {

}