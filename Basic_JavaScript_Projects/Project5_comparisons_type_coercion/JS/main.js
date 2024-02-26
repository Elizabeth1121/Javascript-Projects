/**
 * Displays the result of a coercion operation.
 * returns {string} The coerced value.
 */
function display_Coercion() 
{
    return document.getElementById("coercion").innerHTML = 5 + "5";
}

/**
 * Displays the type of a value.
 * returns {string} The type of the value.
 */
function display_TypeOf() 
{
    return document.getElementById("typeof").innerHTML = typeof 5;
}

/**
 * Displays whether a value is NaN (Not a Number).
 * returns {string} The result of the isNaN operation.
 * this should return true.
 */
function display_IsNan_True()
{
    return document.getElementById("isNan_True").innerHTML = isNaN('Hello');
}

/**
 * Displays whether a value is NaN (Not a Number).
 * returns {string} The result of the isNaN operation.
 * this should return false.
 */
function display_IsNan_False()
{
    return document.getElementById("isNan_False").innerHTML = isNaN('5');
}

/**
 * Displays the result of a comparison operation.
 *  returns {string} The result of the comparison.
 */
function display_Infinity()
{
    return document.write(2E310);
}

/**
 * Displays the result of a comparison operation.
 * returns {string} The result of the comparison.
 */
function display_Negative_Infinity()
{
    return document.write(-3E310);
}

/**
 * Displays the result of a comparison operation.
 * returns {bool} The result of the comparison.
 * this should return true.
 */
function display_Boolean_True()
{
    return document.write(10 > 2);
}

/**
 * Displays the result of a comparison operation.
 * returns {bool} The result of the comparison.
 * this should return false.
 */
function display_Boolean_False()
{
    return document.write(10 < 2);
}

/**
 * Displays the result of a comparison operation.
 * returns {bool} The result of the comparison.
 * this should return false.
 */
function display_Boolean_And()
{
    return document.write(10 > 2 && 10 < 2);
}

/**
 * Displays the result of a addition operation.
*/
function display_Console_Log()
{
    return console.log(2 + 2);
}

// Displays the result of a addition operation within the console.
console.log(2 + 2);

// Displaying "false" within the console.
console.log(false);

// Displaying 10 == 10 = true within the console.
console.log(10 == 10);

// Displaying 3 == 11 = false within the console.
console.log(3 == 11);

// checking if x and y are equal.
x = 10;
y = 10;
document.writeln(x === y);

// checking if a and b are equal.
a = 82;
b = "82";
document.writeln(a === b);

// checking if c and d are equal.
c = "84";
d = "83";
document.writeln(c === d);

// checking if e and f are equal.
e = "t";
f = 1.3;
document.writeln(e === f);

// is 5 greater than 2 and 10 greater than 4?
document.writeln(5 > 2 && 10 > 4);

// is 5 greater than 10 or 10 greater than 4?
document.writeln(5 > 10 && 10 > 4);

// is 5 greater than 10 or 10 greater than 20?
document.writeln(5 > 10 || 10 > 4);

// is 5 greater than 10 or 10 greater than 20?
document.writeln(5 > 10 || 10 > 20);

// is 20 not greater than 10?
function not_Function()
{
    document.getElementById("Not").innerHTML = !(20 > 10);
}

// is 5 not greater than 10?
function not_Function2()
{
    document.getElementById("Not2").innerHTML = !(5 > 10);
}