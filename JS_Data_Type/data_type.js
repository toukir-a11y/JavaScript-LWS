/* js data type there is many variation of data type currently we learn 3 data types of js 

1. string - let name = "toukir";
2. number - let age = 22 ;
3. objetct - let x = {"frist name", "last name"};

When adding a number and a string, JavaScript will treat the number as a string.⤵ */

let x = 12 + "javasctipt";

console.log(x);  //check the datatype use (typeof x)


let y = "javascript" + 12;

console.log( typeof y);



/* JavaScript evaluates expressions from left to right. Different sequences can produce different results:

In the first example, JavaScript treats 12 and 8 as numbers, until it reaches "javascript".

In the second example, since the first operand is a string, all operands are treated as strings. */



let z = 12 + 8 + "javascript";

console.log(z);

let a = "javasctipt" + 10+5;

console.log(typeof a);


/*JavaScript Types are Dynamic

JavaScript has dynamic types. This means that the same variable can be used to hold different data types:⤵ */

let j 

j = 10;

console.log(j);

j = "javascript";

console.log(j);

/* JavaScript Strings

A string (or a text string) is a series of characters like "John Doe".

Strings are written with quotes. You can use single or double quotes: */

let Name1 = "JS";   // Using double quotes
let Name2 = 'JAVASCRIPT';   // Using single quotes

console.log(Name1);

console.log(Name2); 

/*You can use quotes inside a string, as long as they don't match the quotes surrounding the string:*/

let string1 = "It's alright";             // Single quote inside double quotes
let string2 = "He is called 'Johnny'";    // Single quotes inside double quotes
let string3 = 'He is called "Johnny"';    // Double quotes inside single quotes

console.log(string1);
console.log(string2);
console.log(string3);



/*JavaScript Numbers
JavaScript has only one type of numbers.

Numbers can be written with, or without decimals:*/

let x1 = 34;     // Written with decimals
let x2 = 34.00;        // Written without decimals  but output are same 

console.log(x1);
console.log(x2);   

// Extra large or extra small numbers can be written with scientific (exponential) notation:

let Num1 = 123e5;      
let Num2 = 123e-5;    

console.log(Num1);  // 12300000
console.log(Num2);   // 0.00123

/*JavaScript Booleans

Booleans can only have two values: true or false.

Booleans are often used in conditional testing.*/

let bool = 5;

let booli = 5;

let boolian = 6;

console.log(bool==booli);

console.log(bool==boolian);

/* JavaScript Arrays
JavaScript arrays are written with square brackets.

Array items are separated by commas.*/

const  products = ["wpdm", "jitsi_meet", "EVR" ];

console.log(products[2]);

/* JavaScript Objects

JavaScript objects are written with curly braces {}.

Object properties are written as name:value pairs, separated by commas.*/

const students = {name: "toukir", roll: 235524, dept: "cse", shift: "second"};

console.log( typeof students);


/* Undefined
In JavaScript, a variable without a value, has the value undefined. The type is also undefined.*/

let pluign;    // Value is undefined, type is undefined


console.log(pluign);



/*Empty Values⤵

An empty value has nothing to do with undefined.

An empty string has both a legal value and a type.*/


let name = "";    // The value is "", the typeof is "string"

console.log( typeof name);