const { loadLibrary } = require('./../utilities/library.util');

class Library {
    constructor() {
        this.books = loadLibrary();
    }

    findBook(currentBookISBN) {
        const book = this.books.find(({ ISBN }) => currentBookISBN === ISBN);
        if (!book) { throw 'The book does not exist'; }
        return book
    }

    add(ISBN, numberOfCopiesToAdd = 1) {
        try {
            const book = this.findBook(ISBN);
            book.addNewCopies(numberOfCopiesToAdd);
        } catch (error) {
            console.log(`### Error: ${error} ###`)
        }
    }

    borrow(ISBN) {
        try {
            const book = this.findBook(ISBN);
            book.reduceAvailableCopies();
        } catch (error) {
            console.log(`### Error: ${error} ###`);
        }
    }

    return(ISBN) {
        try {
            const book = this.findBook(ISBN);
            book.increaseAvailableCopies();
        } catch (error) {
            console.log(`### Error: ${error} ###`)
        }
    }

    lookup(ISBN) {
        try {
            const book = this.findBook(ISBN);
            book.display();
        } catch (error) {
            console.log(`### Error: ${error} ###`)
        }
    }

    displayBooks() {
        this.books.forEach(book => book.display());
    }

    stock() {
        console.log('\n ---------------- STOCK -----------------');
        this.books.forEach(({ ISBN, totalCopies, availableCopies }) =>
            console.log(`| ${ISBN}, Copies: ${totalCopies}, Available: ${availableCopies} |`));
        console.log(' ----------------------------------------\n');
    }
}

module.exports = Library