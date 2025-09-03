function addBookToLibrary(arr) {
    bookTitle = prompt("Title"); 
    bookAuthor = prompt("Autor"); 
    bookPages = parseInt(prompt("Number of pages")); 
    
    const newBook = new Book(bookTitle, bookAuthor, bookPages);

    arr.push(newBook); 
}; 

function paintBooksDOM(arr) {
    for (let i = 0; i < arr.length; i++) {
    let book = arr[i]; 
    let newCard = document.createElement("div"); 
    newCard.classList.add("book-card"); 
    let title = newCard.appendChild(document.createElement("p")); 
    let author = newCard.appendChild(document.createElement("p")); 
    let pages = newCard.appendChild(document.createElement("p"));  
    const bookContainer = document.getElementById("book-container")

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
        arr.splice(i,1); 
        bookContainer.removeChild(newCard); 
    }); 



    title.textContent = `Title: ${book.title}`; 
    author.textContent = `Author: ${book.author}`; 
    pages.textContent = `Pages: ${book.pages}`; 

    bookContainer.appendChild(newCard); 
}
}

export {addBookToLibrary, paintBooksDOM}; 