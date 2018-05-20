document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // Create an XHR Object
  // Just like instantiating a constructor object
  const xhr = new XMLHttpRequest();
  // OPEN
  // We specify the type of request we want to make and the filename/URL we want
  // GET basically means we want to read the file
  xhr.open('GET', 'data.txt', true);
  // console.log('READYSTATE', xhr.readyState);

  // Optional - Used for spinners/loaders
  xhr.onprogress = function(){
    console.log('READYSTATE', xhr.readyState);
  }

  // Here we deal with the data that we get
  xhr.onload = function(){
    console.log('READYSTATE', xhr.readyState);
    // We check to make sure the status is 200, meaning everything is OK
    if(this.status === 200) {
      // console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }

  // He doesn't recommend using this method but wanted to mention it
  // This makes sure we would be at readyState 4
  // .onreadystatechange checks all statuses 0-4 so thats why we have to make it === 4 before we do anything
  // xhr.onreadystatechange = function() {
  //   console.log('READYSTATE', xhr.readyState);
  //   if(this.status === 200 && this.readyState === 4){
  //     console.log(this.responseText);
  //   }
  // }

  // Only runs if something goes wrong
  xhr.onerror = function() {
    console.log('Request error...');
  }

  // To finalize everything, we must call .send
  xhr.send();

    // readyState Values
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready


  // HTTP Statuses
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"
}
