/* JS object  In real life, a bike is an object.

A bike has properties like weight and color, and methods like start and stop:

All bike have the same properties, but the property values differ from car to car.

All bike have the same methods, but the methods are performed at different times.
*/ 



let bike = {
    name : "Apache",
    color: "black",
    model: "RTR4v",
    weight : 184, 

    start : function(){                             // When we write function inside object it is called "method"
         console.log("bike is started");
    },

    drive : function(){
        this.start();                               //called the another function inside another function.
        console.log("Now is dirving mode");
    }

}

console.log(bike.model);

console.log(bike["weight"]); // another way to access object elements

bike. drive();

//bike. drive();
