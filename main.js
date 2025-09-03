import {Book} from "./assets/js/classes.js"; 
import { addBookToLibrary, paintBooksDOM } from "./assets/js/utils.js";

const book1 = new Book("Radiant Words", "Brandon Sanderson", 1248); 
const book2 = new Book("Oathbringer", "Brandon Sanderson", 1408);

const myLibrary = [book1, book2]; 
const bookContainer = document.getElementById("book-container")

const newBookButton = document.getElementById("add-book"); 
const dialog = document.getElementById("dialog"); 

newBookButton.addEventListener("click", (event) => {
    event.preventDefault(); 
    dialog.show(); 
    
})

const addBookButton = document.getElementById('new-book-add'); 
addBookButton.addEventListener('click', (event) => {
    event.preventDefault(); 
    let title = document.getElementById("new-book-title").value; 
    let author = document.getElementById("new-book-author").value; 
    let pages = document.getElementById("new-book-pages").value; 

    const book = new Book(title, author, pages); 

    myLibrary.push(book); 
    bookContainer.innerHTML = ""; 
    paintBooksDOM(myLibrary); 
    dialog.close(); 
}); 

const closeDialog = document.getElementById("close-dialog"); 

closeDialog.addEventListener("click", (event) => {
    dialog.close(); 
})


// Bucle para pintar los libros en el DOM con sus funcionalidades
paintBooksDOM(myLibrary); 

