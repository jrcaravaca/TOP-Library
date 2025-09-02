class Book {
    title;
    author; 
    pages; 
    read; 
    id;

    constructor(title, author, pages) {
        this.title = title; 
        this.author = author; 
        this.pages = pages;
        this.read = false;
        this.id = crypto.randomUUID(); 

    }; 
}; 

export {Book}; 