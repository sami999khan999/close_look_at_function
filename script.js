"use strict";

// default parameter -

// reference -

// function accepting callback junction -

// currying function -

// lambda expression -

// call method, apply method and bind method -

// Immediately Invoked Function Expression (IIFE) -

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // default parameter

// // Default parameters in JavaScript allow you to specify default values for function parameters. If an argument is not provided when calling the function or is explicitly set to undefined, the default value will be used instead. //

//============================================================================================================================================//

// const bookings = [];

// const createBookings = function (
//   roomNum,
//   guiestNum = 1,
//   price = guiestNum * 1000
// ) {
//   const booking = {
//     roomNum,
//     guiestNum,
//     price,
//   };
//   bookings.push(booking);
// };

// createBookings("A231", undefined, 1000); // if we want to skeep a argument inbetween then we will have to use undefind as a place holder then it can use the defaule value in parameater. //

// createBookings("B231", 32);
// createBookings("C231", 18, 1200);
// console.log(bookings);

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // reference

// // In JavaScript, variables can hold two types of values: primitive values and reference values. Understanding the difference between value and reference is crucial for working with JavaScript variables effectively. Reference types include objects, arrays, and functions.

// // Reference type - When you assign a reference type to a variable, the variable holds a reference (memory address) to the actual object stored in memory. When you assign a reference type variable to another variable or pass it as a function argument, the reference is copied, not the actual object. Modifying the object through one variable will affect the other variables since they point to the same object in memory. //

// // Volue type - Value types include numbers, strings, booleans, null, and undefined. When you assign a value type to a variable, the variable holds the actual value. When you assign a value type variable to another variable or pass it as a function argument, a copy of the value is created. Modifying one variable does not affect the other since they hold independent copies of the value. //

//============================================================================================================================================//

// const filght = "B245";

// const pasenger = {
//   name: "Sami",
//   passport: 24673584568,
// };

// const chickIn = function (filght, pasenger) {
//   filght = "A375"; // value type //
//   console.log(filght);

//   pasenger.name = "Mr " + pasenger.name; // reference type //
//   console.log(pasenger);

//   if (pasenger.passport === 24673584568) {
//     console.log("Chicked In");
//   } else {
//     console.log("Chick In Failed");
//   }
// };

// chickIn(filght, pasenger); // objects are allocated to the heap, and when you pass an object as an argument, the reference to the object is passed by value. //

// console.log(filght);
// console.log(pasenger);

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // function accepting callback Function

// // In JavaScript, functions can accept other functions as arguments, which are commonly referred to as callback functions. This pattern is known as "higher-order functions" and is widely used in JavaScript for various purposes, such as asynchronous operations, event handling, and functional programming. //

//============================================================================================================================================//

// // first class function - In JavaScript, every function is considered a first-class function. In a programming language, if functions are treated as first-class citizens, it means that functions can be assigned to variables, passed as arguments to other functions, and returned as values from functions. In a language with first-class functions, functions are considered to have the same rights and abilities as other data types, such as numbers or strings. JavaScript is an example of a programming language that treats functions as first-class citizens. //

// // higher order function - A higher-order function is a function that can accept one or more functions as arguments or can return a function as its result. It operates on functions, either by taking them as arguments, returning them, or both. Higher-order functions enable the composition of functions and provide a way to abstract and encapsulate common behavior. They are a key feature of functional programming and are widely used in JavaScript.Examples of higher-order functions in JavaScript include map(), filter(), and reduce(). //

// // call back junction - A callback function is a function that is passed as an argument to another function and is executed later when a specific event or condition occurs. The callback function is called back at a later time, hence the name "callback". It allows for asynchronous and event-driven programming in JavaScript. Callback functions are often used to handle responses from asynchronous operations, such as API calls or event handling. They are commonly used with higher-order functions to customize behavior or provide additional logic. Examples of callback functions in JavaScript can be found in event handlers, setTimeout(), and fetch(). //

//============================================================================================================================================//

// const multi = function (a) {
// // milti is hegher order funciton //
//   return function (b) {
// // returned function is a call bakck function //
//     return a * b;
//   };
// };

// const twoMulti = multi(5);
// console.log(twoMulti(2));

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const sayHello = function(){
//   console.log("Hello")
// // sayHello is a call back function //
// }

// const exeFunction = function(func){
//   func()
// // exeFunction is a higher order function //
// }

// exeFunction(sayHello)

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const logCutter = function (log) {
// // logCutter is a call back function //
//   let numLog = 0;
//   for (let logs of log) {
//     numLog += logs * 2;
//   }
//   return numLog;
// };

// const logCounter = function (log) {
// // logCounter is call back function //
//   return log.length;
// };

// const sawMeal = function (funk, log) {
// // sawMwal is higher order function //
//   console.log(`Operated By ${funk.name}`);
//   return funk(log);
// };

// console.log(sawMeal(logCutter, [3, 6, 2, 7, 1, 8]));
// console.log(sawMeal(logCounter, [3, 6, 2, 7, 1, 8]));

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const mathKlk = function (num, a = 1, b = 1) {
//   // mathKlk is a higher order function //
//   return num(a, b);
// };

// const sum = function (a, b) {
//   // sum is call back function //
//   return a + b;
// };

// const sub = function (a, b) {
//   //  sub is call back function //
//   return a - b;
// };

// const mul = function (a, b) {
//   // mul is a call back function //
//   return a * b;
// };

// console.log(mathKlk(sum, 2, 5));
// console.log(mathKlk(mul, 2, 5));
// console.log(mathKlk(sub, 2, 5));

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // currying function

// // Currying is a technique in functional programming where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument. The curried function returns a new function with each argument partially applied until all the arguments are provided, at which point the final result is returned. //

//============================================================================================================================================//

// const greatings = function (great) {
//   return function (name) {
//     console.log(`${great} ${name}`);
//   };
// };

// greatings("Good Morning")("Vlodemear");

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const multi = function (a) {
//   return function (b) {
//     return function (c) {
//       return function (d) {
//         return function (e) {
//           return a * b * c * d * e;
//         };
//       };
//     };
//   };
// };

// const klk = multi(2);
// console.log(klk(3)(2)(5)(3));

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // lambda expression

// // A lambda expression, also known as an anonymous function or a function literal, is a concise way to define a function in programming languages that support functional programming paradigms. //

//============================================================================================================================================//

// const numSum = (a,b) => a+b
// console.log(numSum(2,5))

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const numMul = (a) => (b) => (c) => (d) => a * b * c * d;

// console.log(numMul(2)(3)(3)(6));

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // call method, apply method and bind method

// // call - The call() method in JavaScript is used to invoke a function with a specified this value and arguments provided individually. It allows you to explicitly set the context (this value) for a function when invoking it. //

// // apply - The apply() method in JavaScript is similar to the call() method, but it accepts arguments as an array instead of individual parameters. It allows you to invoke a function and set the this value, along with passing an array (or array-like object) as the arguments to the function. //

// // bind - The bind() method in JavaScript is used to create a new function that has a specific this value set, along with any specified arguments. When you use the bind() method on a function, it returns a new function with the same function body but a different this value. The original function is not invoked immediately but can be called later with the new this value. //

//============================================================================================================================================//

// const person = {
//   fullName: function () {
//     this.name = this.firstName + " " + this.lastName;
//     return this.firstName + " " + this.lastName;
//   },
// };

// const person1 = {
//   name: "",
//   firstName: "Jon",
//   lastName: "Wick",
// };

// const person2 = {
//   name: "",
//   firstName: "Jonathon",
//   lastName: "Wick",
// };

// const person3 = {
//   name: "",
//   firstName: "Baba",
//   lastName: "Yaga",
// };

// console.log(person.fullName.call(person1));
// console.log(person1.name);

// console.log(person.fullName.apply(person2));

// const pers3 = person.fullName.bind(person3)
// console.log(pers3())

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const taxClk = function (taxRate, discount) {
//   return `The total prce of ${this.product} is ${
//     this.price + (this.price * taxRate) / 100 + discount
//   }`;
// };

// // we can't call arrow function using call method because arrow function dasn't have there own value. //

// const shop = {
//   product: "Iphon 14 Pro Max",
//   price: 1400,
// };

// console.log(taxClk.call(shop, 10, 50));

// const taxAndDiscound = [15, 100];
// console.log(taxClk.apply(shop, taxAndDiscound));

// const taxFn = taxClk.bind(shop);
// console.log(taxFn(20, 200));

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const airline1 = {
//   airline: "Airline 001",
//   code: "AGD",
//   bookings: [],
//   book: function (flighrNum, name) {
//     const capName = name.at(0).toUpperCase() + name.slice(1);
//     console.log(
//       `${capName} booked a seat on ${this.airline}. Flight ${this.code}-${flighrNum}.`
//     );
//     this.bookings.push({
//       passengerName: capName,
//       flight: this.code + flighrNum,
//     });
//   },
// };

// const airline2 = {
//   airline: "Airlene 002",
//   code: "HRO",
//   bookings: [],
// };

// const airline3 = {
//   airline: "Airlene 003",
//   code: "KFH",
//   bookings: [],
// };

// const airline4 = {
//   airline4: "Airline 004",
//   code: "SER",
//   bookings: [],
// };

// airline1.book(233, "sami");
// airline1.book(173, "wick");
// console.log(airline1.bookings);

// airline1.book.call(airline2, 381, "luffy");
// console.log(airline2.bookings);

// const info = [463, "zoro"];
// airline1.book.apply(airline3, info);
// console.log(airline3.bookings);

// const air4 = airline1.book.bind(airline4);
// air4(273, "nami");
// console.log(airline4.bookings);

// const air1 = airline1.book.bind(airline1);
// air1(473, "sanji");
// console.log(airline1.bookings);
// // bind method can bid it's own parent object. //

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // Immediately Invoked Function Expression (IIFE)

// // IIFE stands for Immediately Invoked Function Expression. It is a JavaScript function that is executed immediately after it is defined. IIFE is typically used to create a private scope for variables and functions, preventing them from polluting the global scope. //

//============================================================================================================================================//

// (function () {
//   console.log("This will inveked only once.");
// })();

//============================================================================================================================================//

// ((a, b) => console.log(a * b))(2, 3);
