// Here we instanitate the EasyHTTP Class and call function from it
const http = new EasyHTTP;

// Get users wrong way
// This is handling data synchronously which returns undefined
// const users = http.get('https://jsonplaceholder.typicode.com/users');

// Get Users right way (asynchronous)
// http.get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// User Data
const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'jdoe@gmail.com'
}

// Create User
// http.post('https://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Update Post
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Delete User
http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(data => console.log(data))
.catch(err => console.log(err));
