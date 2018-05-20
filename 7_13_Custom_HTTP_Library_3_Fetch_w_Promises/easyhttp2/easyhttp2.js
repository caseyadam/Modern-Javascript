/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 2.0.0
 * @author  Casey Moths
 * @license MIT
 *
 **/

 class EasyHTTP {

  // Make an HTTP GET Request
  get(url) {
    // We call resolve when we want to send a response
    // We call reject when there is an error
    return new Promise((resolve, reject) => {
      // Note fetch itself returns a promise
      fetch(url)
      // Here res gets mapped to JSON
      .then(res => res.json())
      .then(data => resolve(data))
      // If theres an error we catch it here
      .catch(err => reject(err));
    });
  }

  // Make an HTTP POST Request
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }

   // Make an HTTP PUT Request
   put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }

  // Make an HTTP DELETE Request
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(() => resolve('Resource Deleted...'))
      .catch(err => reject(err));
    });
  }

 }
