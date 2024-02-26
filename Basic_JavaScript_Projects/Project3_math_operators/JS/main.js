/**
 * Performs addition operation and displays the result.
 */
function addition_Function() 
{
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

/**
 * Performs subtraction operation and displays the result.
 */
function subtraction_Function() 
{
    var subtraction = 5 - 2;
    document.getElementById("Subtract").innerHTML = "5 - 2 = " + subtraction;
}

/**
 * Performs multiplication operation and displays the result.
 */
function multiplication_Function()
{
    var multiplication = 6 * 8;
    document.getElementById("Multiply").innerHTML = "6 * 8 = " + multiplication;
}

/**
 * Performs division operation and displays the result.
 */
function division_Function()
{
    var division = 48 / 6;
    document.getElementById("Divide").innerHTML = "48 / 6 = " + division;
}

/**
 * Performs multiple operations and displays the result.
 */
function more_Math()
{
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("More_Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

/**
 * Performs modulus operation and displays the result.
 */
function modulus_Operator()
{
    var modulus = 25 % 6;
    document.getElementById("Modulus").innerHTML = "When you divide 25 by 6 you have a remainder of: " + modulus;
}

/**
 * Performs negation operation and displays the result.
 */
function negation_Operator()
{
    var x = 10;
    document.getElementById("Negation").innerHTML = -x;
}

/**
 * Increments the value of x by 1 and displays the result.
 */
function increment_Operator()
{
    var x = 5;
    x++;
    document.write(x);
}

/**
 * Decrements the value of x by 1 and displays the result.
 */
function decrement_Operator()
{
    var x = 5.25;
    x--;
    document.write(x);
}

window.alert(Math.random());
window.alert(Math.random() * 100);

/**
 * Returns the rounded value of 4.7.
 */
function math_object()
{
    return Math.round(4.7);
}

window.alert(math_object());