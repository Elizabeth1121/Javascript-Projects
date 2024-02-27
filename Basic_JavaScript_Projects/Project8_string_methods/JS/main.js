function concat_Strings()
{
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";

    var whole_Sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("display_concat").innerHTML = whole_Sentence;
}

function slice_Method()
{
    var sentence = "All work and no play makes Johnny a dull boy.";
    var selection = sentence.slice(27,33);

    document.getElementById("slice_Method").innerHTML = selection;
}

// to upper, seach methods

var first_String = "This is a string.";
var index = first_String.toUpperCase();

console.log(index);

var second_String = "This is a string.";
var index_2 = second_String.search("string");

console.log(index_2);

// number methods
function string_Method()
{
    var x = 182;
    document.getElementById("numbers_to_string").innerHTML = x.toString();
}

// to precision method
function precision_Method()
{
    var x = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = x.toPrecision(10);
}

// to fixed method
function fixed_Method()
{
    var x = 9.656;
    document.getElementById("Fixed").innerHTML = x.toFixed(2);
}

// value of method
function value_Of_Method()
{
    var num = 456;
    document.getElementById("value_Of").innerHTML = num.valueOf();
}