import {Book} from "./assets/js/classes.js"; 
import { addBookToLibrary } from "./assets/js/utils.js";

const book1 = new Book("Radiant Words", "Brandon Sanderson", 1248); 
const book2 = new Book("Oathbringer", "Brandon Sanderson", 1408);

const myLibrary = [book1, book2]; 
const bookContainer = document.getElementById("book-container")

for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i]; 
    let newCard = document.createElement("div"); 
    newCard.classList.add("book-card"); 
    let title = newCard.appendChild(document.createElement("p")); 
    let author = newCard.appendChild(document.createElement("p")); 
    let pages = newCard.appendChild(document.createElement("p")); 
    let read = newCard.appendChild(document.createElement("p")); 

    if (book.read === true) {
        read.textContent = "✅ READED"
    } else {
        read.textContent = "❌ NOT READED"
    }

    title.textContent = `Title: ${book.title}`; 
    author.textContent = `Author: ${book.author}`; 
    pages.textContent = `Pages: ${book.pages}`; 

    bookContainer.appendChild(newCard); 
}

