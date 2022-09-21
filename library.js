let myLibrary = [];

function Book(title, author, pages, read) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {

    return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read;
}

function addBookToLibrary(book) {

    myLibrary.push(book);
}

function displayBook() {

    const displayArea = document.getElementById("grid-area");
    const card = document.createElement("div");
    displayArea.appendChild(card);
    card.classList.add("card");
    const bookTitle = document.createElement("div");
    const authorName = document.createElement("div");
    const numPages = document.createElement("div");
    const readOrNot = document.createElement("div");
    card.append

}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet.");
addBookToLibrary(theHobbit);
console.log(theHobbit.info());
console.log(myLibrary);
displayBook();
displayBook();
displayBook();
displayBook();
displayBook();
displayBook();
displayBook();
displayBook();
displayBook();
displayBook();
displayBook();
displayBook();
displayBook();
displayBook();