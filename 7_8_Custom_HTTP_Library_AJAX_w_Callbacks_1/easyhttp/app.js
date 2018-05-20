//Instantiates easyHTTP
const http = new easyHTTP;

// Get Posts
// This website is a fake online REST API for testing and prototyping
http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
  if(err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});

// Note this procedure below would be incorrect as it calls the data after loading
// We need to fix this with a callback
// const posts = http.get('https://jsonplaceholder.typicode.com/posts');
