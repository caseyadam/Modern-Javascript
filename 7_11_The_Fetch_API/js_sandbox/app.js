document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

// Get local text file data
function getText() {
  fetch('test.txt')
    .then(function(res){
      // You can console.log 'res' to see all the associated data fetched
      // If you console.log 'res.text' you get a promise
      // If we were dealing with JSON, we would use res.JSON
      return res.text();
    })
    .then(function(data) {
      // This console.log will show you the text inside test.txt
      console.log(data);
      document.getElementById('output').innerHTML = data;
    })
    // If there is an error we use .catch.
    // Try renaming the text file to something incorrect to see the err in console.log
    .catch(function(err){
      console.log(err);
    });
}


// Get local json data
function getJson() {
  fetch('posts.json')
    .then(function(res){
      return res.json();
    })
    .then(function(data) {
      console.log(data);
      let output = '';
      data.forEach(function(post) {
        // Use += to append
        output += `<li>${post.title}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
      console.log(err);
    });
}


// Get from external API
function getExternal() {
  fetch('https://api.github.com/users')
    .then(function(res){
      return res.json();
    })
    .then(function(data) {
      console.log(data);
      let output = '';
      data.forEach(function(user) {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
      console.log(err);
    });
}
