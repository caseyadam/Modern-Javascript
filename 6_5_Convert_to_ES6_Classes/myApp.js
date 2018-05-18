// Book Constructor
// Going to handle creating the book object
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
// Our goals with this function is to add several prototype methods to it to do things like add book to list, delete book, show alert, etc.  
function UI() {}

// Add Book To List
// This method will become a prototype of the object (UI)
UI.prototype.addBookToList = function(book){
  const list = document.getElementById('book-list');
  //Create tr element
  // Here we are building the HTML code that will be added when the user adds a book
  const row = document.createElement('tr');
  // Insert cols
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X<a></td>
  `;
  list.appendChild(row);
}

// Show Alert
UI.prototype.showAlert = function(message, className) {
  // Create div
  const div = document.createElement('div');
  // Add classes
  div.className = `alert ${className}`;
  // Add text
  div.appendChild(document.createTextNode(message));
  // Get parent
  const container = document.querySelector('.container');
  // Get form
  const form = document.querySelector('#book-form');
  // Insert alert
  // Take the container which is the parent
  // Enter two things: what we want to insert (div) and what we want to insert before (form)
  container.insertBefore(div, form);

  // Timeout after 3 sec
  setTimeout(function(){
    document.querySelector('.alert').remove();
  }, 3000);
}

// Delete Book
// This is made because otherwise the event listener selects the entire div, not just the X
// target is the <a> tag
UI.prototype.deleteBook = function(target){
  if(target.className === 'delete') {
    // we go up twice to get and delete the <tr>
    target.parentElement.parentElement.remove();
  }
}

// Clear Fields
UI.prototype.clearFields = function() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

// Event Listener for add book
document.getElementById('book-form').addEventListener('submit', function(e){
  //Get form values
  //The first thing we want to happen when the user clicks submit is get the fields
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;
  // Instantiate book
  const book = new Book(title, author, isbn);
  // Instantiate UI
  const ui = new UI();

  // Validate
  if(title === '' || author === '' || isbn === '') {
    // Error alert
    ui.showAlert('Please fill in all fields', 'error');
    } else {
    // Add book to list
    ui.addBookToList(book);
    // Show success
    ui.showAlert('Book Added!', 'success');
    // Clear fields
    ui.clearFields();
  }

  e.preventDefault();
});

// Event Listener for delete
document.getElementById('book-list').addEventListener('click', function(e){
  // Instantiate UI
  const ui = new UI();
  // Delete book
  ui.deleteBook(e.target);
  // Show message after delete
  ui.showAlert('Book Removed!', 'success');
  e.preventDefault();
});
