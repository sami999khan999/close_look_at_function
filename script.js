"use strict";

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // default parameter

// // Default parameters in JavaScript allow you to specify default values for function parameters. If an argument is not provided when calling the function or is explicitly set to undefined, the default value will be used instead.

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

// // Refrence type - When you assign a reference type to a variable, the variable holds a reference (memory address) to the actual object stored in memory. When you assign a reference type variable to another variable or pass it as a function argument, the reference is copied, not the actual object. Modifying the object through one variable will affect the other variables since they point to the same object in memory. //

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

// // function accepting callback junction

// // In JavaScript, functions can accept other functions as arguments, which are commonly referred to as callback functions. This pattern is known as "higher-order functions" and is widely used in JavaScript for various purposes, such as asynchronous operations, event handling, and functional programming. //

//============================================================================================================================================//

// // first class function

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
//// logCounter is call back function //
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

// // currying function

// // Currying is a technique in functional programming where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument. The curried function returns a new function with each argument partially applied until all the arguments are provided, at which point the final result is returned. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

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

// // lambda expression

// // A lambda expression, also known as an anonymous function or a function literal, is a concise way to define a function in programming languages that support functional programming paradigms. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const numSum = (a,b) => a+b
// console.log(numSum(2,5))

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const numMul = (a) => (b) => (c) => (d) => a * b * c * d;

// console.log(numMul(2)(3)(3)(6));
