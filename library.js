let myLibrary = [];

function Book(title, author, pages, read) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    myLibrary.push(this);
}

Book.prototype.info = function() {

    return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read;
}

function addBookToLibrary(book) {

    myLibrary.push(book);
}

function displayBook(myLibrary) {

    let libarySize = myLibrary.length;
    const displayArea = document.getElementById("grid-area");

    for (let book = 0; book < libarySize; book++) {


        const card = document.createElement("div");
        displayArea.appendChild(card);
        card.classList.add("card");
    
        const bookTitle = document.createElement("div");
        bookTitle.classList.add("title");
        bookTitle.textContent = myLibrary[book].title;
    
        const authorName = document.createElement("div");
        authorName.classList.add("author");
        authorName.textContent = "Author: " + myLibrary[book].author;
    
        const numPages = document.createElement("div");
        numPages.classList.add("num-pages");
        numPages.textContent = "Number of pages: " + myLibrary[book].pages;
    
        const readOrNot = document.createElement("div");
        readOrNot.classList.add("read");
        readOrNot.textContent = myLibrary[book].read;
    
        card.append(bookTitle, authorName, numPages, readOrNot);
    }

}

const theHobbit = new Book("THE HOBBIT", "J.R.R. Tolkien", 295, "Not read yet");
const fakeBook = new Book("FAKE BOOK", "Me", 100, "Read");



displayBook(myLibrary);
