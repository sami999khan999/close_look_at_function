"use strict";

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // default parameter

// // Default parameters in JavaScript allow you to specify default values for function parameters. If an argument is not provided when calling the function or is explicitly set to undefined, the default value will be used instead.

//============================================================================================================================================//

const bookings = [];

const createBookings = function (
  roomNum,
  guiestNum = 1,
  price = guiestNum * 1000
) {
  const booking = {
    roomNum,
    guiestNum,
    price,
  };
  bookings.push(booking);
};

createBookings("A231", undefined, 1000); // if we want to skeep a argument inbetween then we will have to use undefind as a place holder then it can use the defaule value in parameater.

createBookings("B231", 32);
createBookings("C231", 18, 1200);
console.log(bookings);
