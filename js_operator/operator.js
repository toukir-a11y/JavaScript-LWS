// JavaScript Operators

// JavaScript Arithmetic Operators


/* Operator	Description

+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation 
/	Division
%	Modulus (Division Remainder)
++	Increment
--	Decrement*/





// Assignment Operators


/* Operator 	Example	Same As

=	x = y	    x = y
+=	x += y	    x = x + y
-=	x -= y	    x = x - y
*=	x *= y	    x = x * y
/=	x /= y	    x = x / y
%=	x %= y	    x = x % y
**=	x **= y	    x = x ** y

*/

// Assignment Operators (=) equal sing is the assign operator. 


let a = 10; // assign the value 10 to a

let b = 10;   // assign the value 10 to b

let c = a+b;  // assign the value 20 to c (10 + 10)

// console.log(c);

document.getElementById("result").innerHTML= c;


// JavaScript String Operators

// The + operator can also be used to add (concatenate) strings.


let stringone = "Hello";

let stringtwo = "world";

let stringresult = stringone+ "" + stringtwo;

console.log(stringresult);

document.getElementById("string").innerHTML=stringresult;


// The += assignment operator can also be used to add (concatenate) strings:

let text1 = "Have a relax ";
text1 += "See you not for mind";

console.log(text1);

document.getElementById("assign").innerHTML=text1;


// Adding Strings and Numbers

// Adding two numbers, will return the sum, but adding a number and a string will return a string:

let x = 10 + 5;
let y = "5" + 10;
let z = "test" + 5;

console.log( typeof x);
console.log(typeof y);
console.log(typeof z);


document.getElementById("one").innerHTML=x;
document.getElementById("two").innerHTML= typeof y;
document.getElementById("three").innerHTML=z;




// JavaScript Type Operators

/*

Operator	Description
typeof	    Returns the type of a variable

*/

