/**
 * Counts from 0 to 10 and writes the numbers to the document.
 */
function countToTen() {
    var x = 0;

    while (x < 11) {
        document.write(x);
        x++;
    }
}

/**
 * Retrieves the value of an input element with the id "string",
 * calculates the length of the string, and writes it to the document.
 */
function string_Lenght_Property_Method() {
    var str = document.getElementById("string").value;
    var n = str.length;
    document.write(n);
}

var instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;

/**
 * Iterates over the instruments array and adds each instrument to the Content variable.
 * Finally, sets the innerHTML of an element with the id "List_of_Instruments" to the Content.
 */
function for_Loop() {
    for (Y = 0; Y < instruments.length; Y++) {
        Content += instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

/**
 * Sets the innerHTML of an element with the id "Cat" to a sentence describing a cat picture.
 */
function cat_Pics() {
    var cat_Picture = [];
    cat_Picture[0] = "sleeping";
    cat_Picture[1] = "playing";
    cat_Picture[2] = "eating";
    cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + cat_Picture[2] + ".";
}

/**
 * Sets the innerHTML of an element with the id "Array" to a sentence describing a dog breed.
 */
function array_Method() {
    var dogs = [];
    dogs[0] = "Bulldog";
    dogs[1] = "Beagle";
    dogs[2] = "Labrador";
    dogs[3] = "Husky";
    document.getElementById("Array").innerHTML = "The dog breed in the array is " + dogs[2] + ".";
}

/**
 * Sets the innerHTML of an element with the id "Example" to the value of the carName variable.
 */
function myFunction() {
    var carName = "Corvette";
    document.getElementById("Example").innerHTML = carName;
}

/**
 * Modifies the color and price properties of a musical instrument object
 * and sets the innerHTML of an element with the id "Constant" to a sentence describing the instrument.
 */
function constant_Function() {
    const musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    musical_Instrument.color = "blue";
    musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + musical_Instrument.type +
    " was " + musical_Instrument.price;
}

var X = 82;
document.write(X);
{
    let X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);

/**
 * Returns the value of Math.PI.
 * @returns {number} The value of Math.PI.
 */
function return_Function() {
    return Math.PI;
}

let result = return_Function();
document.write(result);

let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    /**
     * Returns a description of the car.
     * @returns {string} The description of the car.
     */
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};

document.getElementById("Car_Object").innerHTML = car.description();

var X;

/**
 * Prompts the user for a number and compares it to a predefined value.
 * Writes a message to the document based on the comparison.
 * @param {number} X - The number entered by the user.
 */
function break_Statement(X) {
    var X = document.getElementById("break").value;
    var Y = 3;

    while (!X === Y) {
        document.write("Sorry wrong answer, try again!" + "<br>");
        break_Statement(X);

        if (X === Y) {
            document.write("You got it!");
            break;
        }
    }
}


for (i = 0; i < 10; i++) {
    // using the break statement to exit the loop when i is equal to 5
    if (i === 5) {
        break;
    }
    document.write(i + "<br>");
}

for (x = 0; x < 10; x++) {
    // using the continue statement to skip the loop when x is equal to 3
    if (x === 3) {
        continue;
    }
    document.write(x + "<br>");
}
