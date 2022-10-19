
//String Length ->  To find the length of a string, use the built-in length property:⤵

let x = "knkbjknbkjnknm,kn,dnkhhbkbdsfknsd";

console.log(x.length);


// Escape Character -> Because strings must be written within quotes, JavaScript will misunderstand this string:⤵


let test = "A quick \"brown\" lazy dog";

console.log(test);

//for special character escape


let esc = "Hello world \we\ are wppool";

console.log(esc); // without escaping din't print the special character

let demo = "Hello world \\we\\ are wppool"; 

console.log(demo);


// JavaScript Strings as Objects⤵


let s = "Hello World";

console.log( typeof s);

let o = new String("Hello World");

console.log(typeof o);



let string = "Hello Wppool";

console.log(typeof string);

let object = new String ("Hello Wppool");

console.log( typeof object);

// if you check it condiconally js shown is same 

console.log(string==object); // the result is true because the js check the value not the type 

console.log(string === object); // now this way check the value and type ans result is false.


//Note : Comparing two JavaScript objects always returns false.