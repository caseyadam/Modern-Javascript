const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

loadEventListeners();

function loadEventListeners(){
  //this allows us to show the saved local storage in the UL even after a browser refresh
  document.addEventListener('DOMContentLoaded', getTasks)
  //listens for the user clicking the submit button inside the form
  form.addEventListener('submit', addTask);
  //listens for the user clicking on the X button on the list item to delete it
  //note we listen for 'taskList' on the UL and not clearBtn in the LI. clearBtn removes all tasks
  taskList.addEventListener('click', removeTask);
  clearBtn.addEventListener('click', clearTasks);
  filter.addEventListener('keyup', filterTasks);
}

function getTasks(){
  //set the storage variable
  let tasks;
  //check for tasks
  if(localStorage.getItem('tasks') === null){
    //if not, empty array
    tasks = [];
  } else {
    // if so, set it to whatever is entered
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  //now we loop through the tasks that are there
  tasks.forEach(function(task){
    //This code was copied from the addTask function

    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and append to li
    // Note the original had 'taskInput.value' but we removed this because the data is coming from the 'task' we pass into the function
    li.appendChild(document.createTextNode(task));
    // Create new link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);
  });
}

//takes in an event object since its an event handler
function addTask(e){
  //we want to make sure there is actually a value entered
  //note the .value added
  if(taskInput.value === ''){
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
  // this function runs and puts the task into local local storage
  storeTaskInLocalStorage(taskInput.value);
  // Clear input after entered
  taskInput.value = '';
  // add this to prevent the form submit
  e.preventDefault();
}

//Note we can see the saved task in Chrome tools > Application
function storeTaskInLocalStorage(task){
  //we set a variable to save any tasks entered
  let tasks;
  //we check to see if there are any tasks
  // === null means there is nothing in there
  if(localStorage.getItem('tasks') ===  null){
    //if no tasks, then our variable just stays an empty array
    tasks = [];
  } else {
    //local storage can only hold strings so we need to parse it
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  //we push the task onto the variable array
  tasks.push(task)
  //now we set back to local storage. note it must be a string still!
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(e){
  //what do I remove? The li? The link variable?
  //No, remove the class "delete-item"
  //But since the list is dynamic and there are multiple entries, you need to use event delegation and focus on the UL not the LI
  //Note if the user clicks on the X button, the click listener gets the icon html, but we want the 'a' tag
  if(e.target.parentElement.classList.contains('delete-item')) {
  // Since the listener just gets the icon html, we need to remove the li, in other words, the parent of the parent of the icon (the li)
    if(confirm('Are you sure?')){
        //here we remove the task from the DOM, not local storage though
        e.target.parentElement.parentElement.remove();
        //this will remove from local localStorage
        //again since we don't have an li to get, we copy the code from above.
        removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

//This function removes tasks from local storage
//here taskItem brings in the list item
function removeTaskFromLocalStorage(taskItem){
  let tasks;
  // check local storage to see if there are any tasks in there
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  //note the index can be passed in here
  tasks.forEach(function(task, index){
    //we want to see if the actual text matches the current iteration, if so, thats the one we want to delete
    if(taskItem.textContent === task){
      //deletes one task
      tasks.splice(index, 1);
    }
  });
  //now we set local storage again
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearTasks(e){
  // Do I need to do e.target like the the removeTask function or can I just target li?
  // There are several ways you could do it.
  // This method just changes the inner HTML of the UL to nothing
  // // taskList.innerHTML = '';
  //Alternatively, you could use a While Loop, which is actually faster
  // This top part says, "While there is a child in the tasklist..."
  while(taskList.firstChild){
    //Why can't I just pass in 'li' here?
    taskList.removeChild(taskList.firstChild);
  }
  // call function for clearing all from local storage
  clearTasksFromLocalStorage();
}

function clearTasksFromLocalStorage(){
  localStorage.clear();
}

function filterTasks(e){
  //this will put whatever is being typed into a variable when can use
  const text = e.target.value.toLowerCase();
  //Now we need to get all of the list items
  //note you can't just enter 'li', rather you enter the class name
  //we use a forEach loop to get a node list. Note we don't use getElementsByClassName which gets an HTML collection which we would have to convert to an array to use .forEach.
  document.querySelectorAll('.collection-item').forEach
  //here 'task' is our iterator
  (function (task){
    const item = task.firstChild.textContent;
    //if there is no match it will equal -1
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
      //else means "there is no match, so hide it"
    }else{
      task.style.display = 'none';
    }
  });
}
