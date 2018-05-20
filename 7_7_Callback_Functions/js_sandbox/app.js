//This mimics a server & database
const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];

//THESE TWO BELOW ARE SYNCHRONOUS FUNCTIONS. This causes a problem with post 3 being loaded.
// function createPost(post) {
//   setTimeout(function() {
//     posts.push(post);
//   }, 2000);
// }
//
// function getPosts() {
//   setTimeout(function() {
//     let output = '';
//     posts.forEach(function(post){
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }
//
// createPost({title: 'Post Three', body: 'This is post three'});
//
// getPosts();


function createPost(post, callback) {
  setTimeout(function() {
    posts.push(post);
    //This callback function gets called before the 2000ms is up so in this example Post 3 will load
    callback();
  }, 2000);
}


function getPosts() {
  setTimeout(function() {
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

//This takes in the new post AND a callback function which are passed into the createPost function
createPost({title: 'Post Three', body: 'This is post three'}, getPosts);
