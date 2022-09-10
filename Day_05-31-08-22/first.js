
var x 

x = "hello world";

document.getElementById("demo").innerHTML=x;


var wp = "WPPOOL";

document.getElementById("company").innerHTML=wp;    




let s = 10; // is a global scope 

{
    let s = 5;

    console.log(s); // block scope (if you can use var then the "s" is accesble from the global scope)
}

console.log(s);

// different between the var and let 

// Redeclaring a variable inside a block will not redeclare the variable outside the block

var x = 10;
// Here x is 10

{
var x = 2;
// Here x is 2
}

// Here x is 2

// if you use var inside block he can redeclare the value like above example


// for example let 

let x = 10;
// Here x is 10

{
let x = 2;
// Here x is 2
}

// Here x is 10


// Redeclare rules var and let 

var x = 2;   // Allowed
let x = 3;   // Not allowed

{
let x = 2;   // Allowed
let x = 3;   // Not allowed
}

{
let x = 2;   // Allowed
var x = 3;   // Not allowed
}


// Hoisting var and let 

// var carName;
// carName = undefined; but the undefined value set for the var not apply for a cons;

carName = "toyota";
var carName;

console.log(canName);



//Let hoisting


// var carName;
//  undefined value are not set for the let and we get an error;

carName = "Saab";
let carName = "Volvo";

