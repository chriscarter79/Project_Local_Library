function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const borrowedBooks = books.filter((book) => book.borrows[0].returned === false);
  const returnedBooks = books.filter((book) => book.borrows[0].returned === true);
  return [borrowedBooks,returnedBooks];
}

function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function getBorrowersForBook(book, accounts) {
  //Tried to use the require function to import from accounts.js, but live web threw uncaught exception errors.
  //const { findAccountById } = require("./accounts.js")
  let result = [];
  for (let idx in book.borrows){
    const account = findAccountById(accounts, book.borrows[idx].id)
      if (result.length < 10){
        result.push({...account, returned : book.borrows[idx].returned});
      }
  }
  return result;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
