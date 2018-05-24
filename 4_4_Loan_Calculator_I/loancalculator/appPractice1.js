// GOALS OF THE PROJECT
// 1. Display loading GIF on submit and begin calculations
// 2. Calculate the results
// - Here is the math:
//   principal = amount
//   calculatedInterest = interest / 100 / 12
//   calculatedPayments  = years * 12
//   const x = Math.pow(1 + calculatedInterest, calculatedPayments);
//   const monthly = (principal*x*calculatedInterest)/(x-1);
// 3. Display the results in the fields
// 4. Show an error if the inputs are wrong. Make sure it disappears.
// *** Remember: After calculating the monthly value, you need to check if it is an infinite number beforehand
// *** Don't forget to preventDefault as needed.

// QUERY SELECTORS
// Get loan amount entry
const loan = document.querySelector('#amount');
// Get interest amount entry
const interest = document.querySelector('#interest');
// Get years to repay entry
const years = document.querySelector('#years');
// Calculate button
const button = document.querySelector('#loan-form');
// Results
const results = document.querySelector('#results');

// EVENT LISTENERS

// RESULTS
function calculateResults(){
  // Caculcate monthly payment
  const monthlyPayment = *MATH;
  // Calculate total Payment
  const totalPayment = *MATH;
  // Calculate total interest
  const totalInterest = *MATH;
}

// Show temporary loading gif
setTimeout(clearGif, 3000);

function clearGif(){
  document.querySelector('#loading').remove();
}


// WHAT DON'T I GET?
// Does the button need to get the querySelector on the form input or the button?
// - Form input. I need to review why.
// How do I get the values being entered into the inputs?
// - Use .value to get them.
// - Remember: the values put into the inputs are Strings, NOT numbers. You will need to parseFloat them.
// How do I show the gif then hide it and then show the results?
// - You make it its own function. Note with setTimeout(), the first function you pass in, will run after the time ends.
// How do I put the results into the inputs?
// - Use .value to set them.
