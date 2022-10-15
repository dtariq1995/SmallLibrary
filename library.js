let myLibrary = [];

function Book(title, author, pages, read) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    myLibrary.push(this);
    displayBook(this);
    console.log(myLibrary);
}

Book.prototype.info = function() {

    return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read;
}

function addBookToLibrary() {

    let title = document.getElementById('title').value.toUpperCase();
    let author = document.getElementById('author').value;
    let pages = parseInt(document.getElementById('numPages').value);
    let read = document.getElementById('readYet').value;

    let newBook = new Book(title, author, pages, read);
    return newBook;

}

function toggle() {
    var dim = document.getElementById('dim');
    dim.classList.toggle('active');
    var form = document.getElementById('form');
    form.classList.toggle('active');
}

function displayBook(book) {

    const displayArea = document.getElementById("grid-area");

    const card = document.createElement("div");
    displayArea.appendChild(card);
    card.classList.add("card");

    const bookTitle = document.createElement("div");
    bookTitle.classList.add("title");
    bookTitle.textContent = book.title;

    const authorName = document.createElement("div");
    authorName.classList.add("author");
    authorName.textContent = "Author: " + book.author;

    const numPages = document.createElement("div");
    numPages.classList.add("num-pages");
    numPages.textContent = "Number of pages: " + book.pages;

    const readOrNot = document.createElement("div");
    readOrNot.classList.add("read");
    readOrNot.textContent = book.read;

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    deleteBtn.textContent = "Remove";

    deleteBtn.addEventListener('click', event => {
        event.target.parentNode.remove();
        myLibrary.splice(myLibrary.indexOf(book),1);
      });
      

    card.append(bookTitle, authorName, numPages, readOrNot, deleteBtn);
}

const theHobbit = new Book("THE HOBBIT", "J.R.R. Tolkien", 295, "Not read yet");


