import {Book} from "./assets/js/classes.js"; 
import { addBookToLibrary } from "./assets/js/utils.js";

const book1 = new Book("Radiant Words", "Brandon Sanderson", 1248); 
const book2 = new Book("Oathbringer", "Brandon Sanderson", 1408);

const myLibrary = [book1, book2]; 
const bookContainer = document.getElementById("book-container")

// Bucle para pintar los libros en el DOM con sus funcionalidades
for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i]; 
    let newCard = document.createElement("div"); 
    newCard.classList.add("book-card"); 
    let title = newCard.appendChild(document.createElement("p")); 
    let author = newCard.appendChild(document.createElement("p")); 
    let pages = newCard.appendChild(document.createElement("p"));  

    let readButton = newCard.appendChild(document.createElement("button"));
    readButton.classList.add("read-button"); 
    
    if (book.read === true) {
            readButton.style.backgroundColor = "#6DFF89"; 
            readButton.textContent = "✅ Read"
    } else {
            readButton.style.backgroundColor = "#FF676A"; 
            readButton.textContent = "❌ Not Read";
    }

    readButton.addEventListener("click", (event) => {
        event.preventDefault(); 
        
        if (book.read === true) {
            book.read = false;
            readButton.style.backgroundColor = "#FF676A"; 
            readButton.textContent = "❌ Not Read";
        } else {
            book.read = true;
            readButton.style.backgroundColor = "#6DFF89"; 
            readButton.textContent = "✅ Read"
        }
    })

    let remove = newCard.appendChild(document.createElement("button")); 
    remove.classList.add("remove-button")
    remove.textContent = "Remove Book";
    remove.addEventListener("click", (event) => {
        event.preventDefault();
        myLibrary.splice(i,1); 
        bookContainer.removeChild(newCard); 
    }); 



    title.textContent = `Title: ${book.title}`; 
    author.textContent = `Author: ${book.author}`; 
    pages.textContent = `Pages: ${book.pages}`; 

    bookContainer.appendChild(newCard); 
}

