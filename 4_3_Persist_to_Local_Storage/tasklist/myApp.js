const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

loadEventListeners();

function loadEventListeners(){
  //listens for the user clicking the submit button inside the form
  form.addEventListener('submit', addTask);
  //listens for the user clicking on the X button on the list item to delete it
  //note we listen for 'taskList' on the UL and not clearBtn in the LI
  taskList.addEventListener('click', removeTask);
  clearBtn.addEventListener('click', clearTasks);
}

//takes in an event object since its an event handler
function addTask(e){
  //we want to make sure there is actually a value entered
  //note the .value added
  if(taskInput.value === '') {
    alert('Add a task');
  }
  //we need to create the list item from scratch
  const li = 	document.createElement('li');
  //we add a class to the li variable we just made
  //collection-item is a Materialize class that makes it look good
  li.className = 'collection-item';
  //create text node and append to li
  //should we use .innerText or .setAttribute? Neither :/
  //taskInput.value gets whatever text the user enters into the input form
  li.appendChild(document.createTextNode(taskInput.value));
  //Create new link element. This will be the X the user can delete the task with
  const link = document.createElement('a');
  //Add the Materialize classes to the link
  //secondary-content moves the X button to the right side of the list item
  link.className = 'delete-item secondary-content';
  //Add icon HTML
  //this icon is pulled from Font Awesome
  link.innerHTML = '<i class="fa fa-remove"></i>';
  //Append the link to the li
  //How do we append a variable to another variable?
  li.appendChild(link);
  //Append the li to the ul
  // How do we append a variable (li) to a class (.collection)?
  // Since we defined the class as a variable already (taskList), its easy
  taskList.appendChild(li);
  // Clear input
  taskInput.value = '';
  // add this to prevent the form submit
  e.preventDefault();
}

function removeTask(e){
  //what do I remove? The li? The link variable?
  //No, remove the class "delete-item"
  //But since the list is dynamic and there are multiple entries, you need to use event delegation and focus on the UL not the LI
  //Note if the user clicks on the X button, the click listener gets the icon html, but we want the 'a' tag
  if(e.target.parentElement.classList.contains('delete-item')) {
  // Since the listener just gets the icon html, we need to remove the li, in other words, the parent of the parent of the icon (the li)
    if(confirm('Are you sure?')){
        e.target.parentElement.parentElement.remove();
    }
  }
}

function clearTasks(e){
  

  e.preventDefault();
}
