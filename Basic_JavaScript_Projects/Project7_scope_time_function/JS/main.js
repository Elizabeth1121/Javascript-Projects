/**
 * Sets the value of the element with id "global_Var" to the global variable "global_Var" plus 5.
 */
function global_Var_Function() {
    document.getElementById("global_Var").innerHTML = global_Var + 5;    
}

/**
 * Sets the value of the element with id "local_Var" to the local variable "local_Var" plus 5.
 */
function local_Var_Function() {
    var local_Var = 10; // local variable
    document.getElementById("local_Var").innerHTML = local_Var + 5;
}

/**
 * Sets the value of the element with id "Greeting" based on the current time of day.
 * If the current time is before 18:00, the greeting will be "How are you today?".
 */
function get_Date() {
    if(new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

/**
 * Sets the value of the element with id "how_Old_Are_You?" based on the input value of the element with id "Age".
 * If the input value is greater than or equal to 18, the message will be "You are old enough to vote!".
 * Otherwise, the message will be "You are not old enough to vote!".
 */
function age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    } else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("how_Old_Are_You?").innerHTML = Vote;
}

/**
 * Sets the value of the element with id "time_Of_Day" based on the current time of day.
 * If the current time is between 0:00 and 12:00, the message will be "It is morning time!".
 * If the current time is between 12:00 and 18:00, the message will be "It is afternoon.".
 * Otherwise, the message will be "It is evening time.".
 */
function time_Function() {
    var Time = new Date().getHours();
    var Reply;

    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    } else if (Time >= 12 == Time < 18) {
        Reply = " It is afternoon.";
    } else {
        Reply = " It is evening time.";
    }
    document.getElementById("time_Of_Day").innerHTML = Reply;
}