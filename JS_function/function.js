// Function syntax ⤵

function firstFunction(names){

    let x = 10;
    console.log(   names + " " + "how are you", + "id");
    
}


firstFunction("sabbir_sam");
firstFunction("Jakir Hossain");

// we have added multiple parameters 


function students (names, roll, dept){
    console.log("students deatails", " ",  "name=", names,  "roll=", roll, "department=", dept);
}

students("zahid", 235524, "cse" );


/* Function Return 

When JavaScript reaches a return statement, the function will stop executing.

If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

Functions often compute a return value. The return value is "returned" back to the "caller":*/


function math (a, b){
    return a+b; 
}


let result = math (10, 12); // return store the value in variable

console.log(result);


/*
Functions Used as Variable Values. Functions can be used the same way as you use variables, in all types of formulas, assignments, and calculations.
*/


function bikeName(){
    let x = "Apache RTR";

    console.log(x);
}

bikeName();

