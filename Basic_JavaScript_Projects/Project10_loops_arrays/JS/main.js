function countToTen()
{
    var x = 0;

    while ( x < 11 )
    {
        document.write(x);
        x++;
    }
}

function string_Lenght_Property_Method()
{
    var str = document.getElementById("string").value;
    var n = str.length;
    document.write(n);
}

var instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;

function for_Loop()
{
    for(Y = 0; Y < instruments.length; Y++)
    {
        Content += instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function cat_Pics()
{
    var cat_Picture = [];
    cat_Picture[0] = "sleeping";
    cat_Picture[1] = "playing";
    cat_Picture[2] = "eating";
    cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + cat_Picture[2] + ".";
}

function array_Method()
{
    var dogs = [];
    dogs[0] = "Bulldog";
    dogs[1] = "Beagle";
    dogs[2] = "Labrador";
    dogs[3] = "Husky";
    document.getElementById("Array").innerHTML = "The dog breed in the array is " + dogs[2] + ".";
}

function myFunction()
{
    var carName = "Corvette";
    document.getElementById("Example").innerHTML = carName;
}

function constant_Function()
{
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

function return_Function()
{
    return Math.PI;
}

let result = return_Function();
document.write(result);

let car = 
{
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function()
    {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};

document.getElementById("Car_Object").innerHTML = car.description();

var X;
function break_Statement(X)
{
    var X = document.getElementById("break").value;
    var Y = 3;

    while (!X === Y)
    {
        document.write("Sorry wrong anwser, try again!" + "<br>");
        break_Statement(X);

        if (X === Y)
        {
            document.write("You got it!");
            break;
        }
    }
}


for (i = 0; i < 10; i++)
{
    if (i === 5)
    {
        break;
    }
    document.write(i + "<br>");
}

for (x = 0; x < 10; x++)
{
    if (x === 3)
    {
        continue;
    }
    document.write(x + "<br>");
}