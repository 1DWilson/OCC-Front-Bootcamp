//Control Flow Structures
//Conditional Statements

//Conditionals if 
//if statement
let age = 18;
if (age >=18) {
    console.log("You are eligible to vote!");
    } else {
        console.log("You are not eligible to vote!");
    }



//if else if-else
let temperature = 25;
if(temperature < 0) {
    console.log("It's freezing!");
    } else if (temperature >=0 && temperature < 20) {
        console.log("It's cool outside!");
    } else {
        console.log ("It's a warm day!");
    }




    //Conditionals: Switch statement
    let day = "Monday";

    switch (day) {
        case "Monday":
            console.log("Its the start of the week.");
            break;
            case "Friday":
                console.log("Its the end of the week");
                break;
             default:
                console.log("Its a regular day.");
                break;
                   
    }