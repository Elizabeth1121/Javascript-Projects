/**
 * Defines a function named My_first_function.
 */
function My_first_function() {
    var str = "test str";
    document.getElementById("button_text").innerHTML = str;
}

// Get the element with id "my_paragraph"
const myParagraph = document.getElementById("my_paragraph");

/**
 * Defines a function named sampleFunction.
 */
function sampleFunction() {
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;
}

/**
 * Defines a function named sampleFUnction2.
 */
function sampleFUnction2() {
    var sentence = "testing";
    sentence += " my code...";
    document.getElementById("Concatenate2").innerHTML = sentence;
}

/**
 * Returns the string "Hello!".
 */
function sayHello() {
    return "Hello!";
}

document.getElementById("hello").innerHTML = sayHello();


function addFunction() 
{
    return 2 + 2;
}

document.getElementById("add").innerHTML = addFunction();

function addition_Function() 
{
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}