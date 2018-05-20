document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  // this gets the number of jokes
  // you could just use input but he adds type to be more specific
  const number = document.querySelector('input[type="number"]').value;
  // instantiate the request
  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
  // this happens when we get the data
  xhr.onload = function() {
    // checks status is ok
    if(this.status === 200) {
      // we use JSON.parse to change it from a JSON string to useable data
      const response = JSON.parse(this.responseText);

      let output = '';
      // makes sure type is a success
      if(response.type === 'success') {
        response.value.forEach(function(joke){
          //appends this to the let output above
          output += `<li>${joke.joke}</li>`;
        });
      } else {
        output += '<li>Something went wrong</li>';
      }

      document.querySelector('.jokes').innerHTML = output;
    }
  }

  xhr.send();

  e.preventDefault();
}
