class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    getInfo() {
        return `book '${this.title}', Author: ${this.author}, pages: ${this.pages}`;
    }

    isLong() {
        return this.pages > 300;
    }
}

// ობიექტის შექმნა
const book1 = new Book("The Silent Patient", "Alex Michaelides", 336);

console.log(book1.getInfo());
console.log(book1.isLong());