const fs = require('fs')
const Book = require('../entities/book');

const loadLibrary = () => {
    try {
        const data = fs.readFileSync('./data/catalog.csv', {encoding:'utf8', flag:'r'});
        const books = [];
        data.split('\n').forEach(line => {
            if (!line.length) { return; } // If we reached the last (empty) line of the csv file.
            const bookDetails = line.split(','); 
            const currentBook = new Book(bookDetails[0], bookDetails[1], bookDetails[2], bookDetails[3].trim());
            books.push(currentBook);
        });
        return books;
    } catch (error) {
        console.log(error);
    }
};

module.exports = { loadLibrary }