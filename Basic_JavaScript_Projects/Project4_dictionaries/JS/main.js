/**
 * Sets the innerHTML of an element with id "Dictionary" to the value of the "Sound" property of the "animal" object.
 */
function my_Dictionary() {
    var animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound: "Bark!"
    };
    document.getElementById("Dictionary").innerHTML = animal.Sound;
}

/**
 * Deletes the "Color" property from the "food" object and sets the innerHTML of an element with id "Dictionary2" to the value of the deleted property.
 */
function my_Dictionary2() {
    var food = {
        Type: "Fruit",
        Color: "Yellow",
        Name: "Banana",
        Taste: "Sweet",
        Texture: "Soft"
    };
    delete food.Color;
    document.getElementById("Dictionary2").innerHTML = food.Color;
}
