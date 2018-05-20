// An immediate anonymoys function that returns one instance of the object at a time.
// This would be useful to create one user object at a time, maybe a logged in user
// Singleton Patterns are often frowned upon because they give you a global point of access which makes them hard to debug
// Traversy doesn't use these hardly but they are universal across programming languages.
const Singleton = (function() {
  let instance;

  function createInstance() {
    const object = new Object({name:'Brad'});
    return object;
  }

  return {
    getInstance: function() {
      if(!instance){
        instance = createInstance();
      }
      return instance;
    }
  }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA === instanceB);

// console.log(instanceA);
