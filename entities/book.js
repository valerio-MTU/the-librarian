class Book {
    constructor(ISBN, title, author, publicationDate, totalCopies = 0, availableCopies = 0) {
        this.ISBN = ISBN;
        this.title = title;
        this.author = author;
        this.publicationDate = publicationDate;  
        this.totalCopies = totalCopies;
        this.availableCopies = availableCopies;
    }

    reduceAvailableCopies() {
       if (this.availableCopies === 0) { throw `Not enough copies available for the book '${this.title}'`; }
       this.availableCopies--;
    }

    increaseAvailableCopies() {
        if (this.availableCopies === this.totalCopies) { throw `All the available copies for the book '${this.title}' are already in stock`; }
        this.availableCopies++;
    }

    addNewCopies(numberOfCopiesToAdd) {
        if (typeof numberOfCopiesToAdd !== 'number') { throw `Wrong value for the number of copies to add`; }
        this.totalCopies += numberOfCopiesToAdd;
        this.availableCopies += numberOfCopiesToAdd;
    }

    display() {
        console.log(`=> ${this.title} by ${this.author} (${this.publicationDate})`);
    }
}

module.exports = Book