function addBookToLibrary(arr) {
    bookTitle = prompt("Title"); 
    bookAuthor = prompt("Autor"); 
    bookPages = parseInt(prompt("Number of pages")); 
    
    const newBook = new Book(bookTitle, bookAuthor, bookPages);

    arr.push(newBook); 
}; 

export {addBookToLibrary}; 