const posts = [
  {title: 'Post One', body:'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];

//Note how the callbacks were removed from the previous course episode
function createPost(post) {
  // This is the promise.
  // Resolve is what happens when we're done
  // Reject is for errors
  return new Promise(function(resolve, reject){
    setTimeout(function() {
      posts.push(post);
      // This is just for testing the error. You can set it to true to check.
      const error = false;

      if(!error) {
        resolve();
      } else {
        reject('Error: Something went wrong');
      }
    }, 2000);
  });
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

createPost({title: 'Post Three', body: 'This is post three'})
.then(getPosts)
.catch(function(err) {
  console.log(err);
});
