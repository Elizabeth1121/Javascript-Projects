function color_Function()
{
    var color_Output;
    var colors = document.getElementById("color_Input").value;
    var color_String = " is a great color!";

    switch(colors)
    {
        case "Red":
            color_Output = "Red" + color_String;
            break;
        case "Yellow":
            color_Output = "Yellow" + color_String;
            break;
        case "Green":
            color_Output = "Green" + color_String;
            break;
        case "Blue":
            color_Output = "Blue" + color_String;
            break;
        case "Pink":
            color_Output = "Pink" + color_String;
            break;
        case "Purple":
            color_Output = "Purple" + color_String;
            break;
        default:
            color_Output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = color_Output;
}

function animal_Function()
{
    var animal_Output;
    var animal = document.getElementById("animal_Input").value;
    var animal_String = " is a great animal!";

    switch(animal)
    {
        case "Dog":
            animal_Output = "Dog" + animal_String;
            break;
        case "Cat":
            animal_Output = "Yellow" + animal_String;
            break;
        case "Fish":
            animal_Output = "Fish" + animal_String;
            break;
        case "Bird":
            animal_Output = "Bird" + animal_String;
            break;
        case "Pink":
            animal_Output = "Pink" + animal_String;
            break;
        case "Horse":
            animal_Output = "Horse" + animal_String;
            break;
        default:
            animal_Output = "Please enter an animal exactly as written on the above list.";
    }
    document.getElementById("animal_Output").innerHTML = animal_Output;
}