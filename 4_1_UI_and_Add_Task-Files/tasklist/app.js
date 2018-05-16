// Define UI Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
// This is added to avoid putting the event listener in the global scope
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);
}

// Add Task
// Takes an 'e' since its an event handler
function addTask(e) {
  //if nothing is entered, then alert
  if(taskInput.value === '') {
    alert('Add a task');
  }

  // Create li element
  const li = document.createElement('li');
  // Add class
  // we're doing that because in Materialize if you want the UL's to look good they need a class of collection and each item a class of 'collection-item'
  li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  // Add class
  // 'secondary-content' is a Materialize class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);

  // Append li to ul
  //'taskList' was defined at the start as a const UI variable
  taskList.appendChild(li);

  // Clear input
  taskInput.value = '';

  //We want to make sure to prevent the default behavior of form submit.
  e.preventDefault();
}
