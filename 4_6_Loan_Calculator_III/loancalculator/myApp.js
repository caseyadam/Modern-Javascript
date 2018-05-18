// Listen for submit button
// Note we do not listen on the button/submit, but rather the form parent
// Also note in order to set the delay on running the function, we don't just add 'calculateResults' into the event listener. We make it a function instead.
// Also also note, when we do this we can move the 'e' from calculate results and preventDefault as we are no longer running an event handler in that function. We add them below now.
document.getElementById('loan-form').addEventListener('submit', function(e){
  //Hide results. This will work when the user runs it multiple times to keep things hidden.
  //We are changing the CSS stylings
  document.getElementById('results').style.display = 'none';
  // Show loader
  document.getElementById('loading').style.display = 'block';
  //We show the spinner for 2 seconds before running the calculateResults function
  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

function calculateResults(){
  // We get the UI variables
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');
  // We want the value/amount turned into/parsed into a decimal (aka float)
  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;
  // Here we compute the monthly payments
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal*x*calculatedInterest)/(x-1);

  // Now we want to check if the monthly value is a finite number
  // If it is, we want to display the results in the fields
  if(isFinite(monthly)) {
    // .toFixed sets the result to two decimals
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
    // This makes the results show after the 2 second timer is over
    document.getElementById('results').style.display = 'block';
    // Hide loader
    document.getElementById('loading').style.display = 'none';
  } else {
    showError('Please check your numbers');
  }
  // Since its a form submit, we prevent default behavior
  e.preventDefault();
}

// Show error
// Here we are creating a custom UI
function showError(error){
  // Hide results
  document.getElementById('results').style.display = 'none';
  // Hide loader
  document.getElementById('loading').style.display = 'none';
  // Create a div
  const errorDiv = document.createElement('div');
  // Get elements so we can insert the error message between them
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');
  // Add class to the div we just made
  errorDiv.className = 'alert alert-danger';
  //Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));
  // Insert error above heading
  // Call it on a parent and pass in the element you want to put in and whatever you want it before (heading)
  card.insertBefore(errorDiv, heading);
  //Clear error message after 3 seconds
  setTimeout(clearError, 3000);
}

// Clear error
function clearError(){
  document.querySelector('.alert').remove();
}

//Make spinner graphic appear temporarily before totals appear

//Make the totals appear after calculation
