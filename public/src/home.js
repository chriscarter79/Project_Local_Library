function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

//Should return the total number of books that are currently borrowed.
function getBooksBorrowedCount(books) {
  //create and initialize variable "result" to store the count (number)
  let result = 0;
  //loop through books array
  for (let i = 0; i < books.length; i++){
    //find the key called borrows
    const book = books[i].borrows;
    //loop through the borrows array
    const returnedBook = book[0].returned
    //if true increment "result"
    if (returnedBook === false){
      result++
    }
  }
  //return "result"
   return result;
}

function _sortByValues(obj){
  const keys = Object.keys(obj);
  return keys.sort((keyA, keyB) => {
    if(obj[keyA] > obj[keyB]){
      return -1
    } else if (obj[keyA] > obj[keyB]){
      return 1;
    } else {
      return 0;
    }
  })
}

function getMostCommonGenres(books) {
  const count = books.reduce((acc, { genre }) => {
    if (acc[genre]){
      acc[genre] += 1
    } else {
      acc[genre] = 1
    }
    return acc;
  }, {});
  const sorted = _sortByValues(count);
  return sorted.map((name) => ({ name, count: count[name]})).slice(0,5);
}

function getMostPopularBooks(books) {
  const mappedBooks = books.map((book) => {
    return { name: book.title, count: book.borrows.length };
  });
  return mappedBooks.sort((book1, book2) => book2.count - book1.count).slice(0,5);
}

function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function getMostPopularAuthors(books, authors) {
   //Tried to use require function, but live web threw uncaught reference errors so I just copied the function I needed from books.js.
  //const { findAuthorById } = require("./books.js");
  const mappedBooks = books.map((book) => {
    const {name : {first, last}} = findAuthorById(authors, book.authorId)
    return { name: `${first} ${last}`, count: book.borrows.length };
  });
  return mappedBooks.sort((book1, book2) => book2.count - book1.count).slice(0,5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
