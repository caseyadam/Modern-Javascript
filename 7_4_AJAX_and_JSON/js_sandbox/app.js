document.getElementById('button1').addEventListener('click', loadCustomer);

document.getElementById('button2').addEventListener('click', loadCustomers);

// Load Single Customer
function loadCustomer(e) {
  //Instantiate request
  const xhr = new XMLHttpRequest();
  // True for asynchronous
  xhr.open('GET', 'customer.json', true);

  xhr.onload = function(){
    // Makes sure its a 200 status
    if(this.status === 200) {
      // console.log(this.responseText);
      // Here we parse it as an object
      const customer = JSON.parse(this.responseText);
      //This gets put into the div
      const output = `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.phone}</li>
        </ul>
      `;
      document.getElementById('customer').innerHTML = output;
    }
  }
  xhr.send();
}


// Load Multiple Customers
function loadCustomers(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customers.json', true);

  xhr.onload = function(){
    if(this.status === 200) {
      // console.log(this.responseText);

      const customers = JSON.parse(this.responseText);

      let output = '';
      // We loop through each customer and output into its own <ul>
      customers.forEach(function(customer){
        // Here we append with +=
        output += `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.phone}</li>
        </ul>
      `;
      });
      document.getElementById('customers').innerHTML = output;
    }
  }
  xhr.send();
}
