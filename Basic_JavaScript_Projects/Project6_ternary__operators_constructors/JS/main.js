/**
 * Writes the result of a ternary operator expression to the document.
 * param {boolean} condition - The condition to evaluate.
 * param {string} leftResult - The result if the condition is true.
 * param {string} rightResult - The result if the condition is false.
 */
document.write(bigger = (5 > 1) ? "Left number is bigger" : "Right number is bigger");

/**
 * Determines if a person is tall enough to ride based on their height.
 */
function ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

/**
 * Determines if a person is old enough to vote based on their age.
 */
function voting_Age() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough to vote" : "You are old enough to vote";
    document.getElementById("Vote").innerHTML = Can_vote;
}

/**
 * Represents a vehicle.
 * constructor
 * param {string} Make - The make of the vehicle.
 * param {string} Model - The model of the vehicle.
 * param {number} Year - The year of the vehicle.
 * param {string} Color - The color of the vehicle.
 */
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

/**
 * Displays information about Erik's vehicle.
 */
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

/**
 * Represents a dog.
 * constructor
 * param {string} Breed - The breed of the dog.
 * param {number} Age - The age of the dog.
 * param {string} Color - The color of the dog.
 * param {number} Weight - The weight of the dog.
 * param {string} Name - The name of the dog.
 */
function Dog(Breed, Age, Color, Weight, Name) {
    this.Dog_Breed = Breed;
    this.Dog_Age = Age;
    this.Dog_Color = Color;
    this.Dog_Weight = Weight;
    this.Dog_Name = Name;
}

var Fido = new Dog("Labrador", 5, "Black", 60, "Fido");
var Spot = new Dog("Dalmation", 3, "White and Black", 40, "Spot");
var Rex = new Dog("German Shepherd", 4, "Brown and Black", 80, "Rex");

/**
 * Displays information about Spot the dog.
 */
function display_Dogs() {
    document.getElementById("New_and_This").innerHTML =
        Spot.Dog_Name + " is a " + Spot.Dog_Color + "-colored " + Spot.Dog_Breed + " who is " + Spot.Dog_Age + " years old.";
}

/**
 * Represents a person.
 * constructor
 * param {string} firstName - The first name of the person.
 * param {string} lastName - The last name of the person.
 * param {number} age - The age of the person.
 * param {string} eyeColor - The eye color of the person.
 */
function Person(firstName, lastName, age, eyeColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;

    /**
     * Gets a summary of the person's information.
     * @returns {string} The summary of the person's information.
     */
    this.getSummary = function () {
        return this.firstName + " " + this.lastName + " is " + this.age + " years old with " + this.eyeColor + " eyes.";
    }
}

var person1 = new Person("John", "Doe", 50, "blue");

/**
 * Displays the summary of person1's information.
 */
function display_Person() {
    document.getElementById("Nested_Function").innerHTML = person1.getSummary();
}

/**
 * Counts from a starting point and returns the result.
 * returns {number} The final count.
 */
function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var starting_Point = 9;
        function Plus_one() {
            starting_Point += 1;
        }
        Plus_one();
        return starting_Point;
    }
}