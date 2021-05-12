function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((lastNameA, lastNameB) => lastNameA.name.last.toLowerCase() > lastNameB.name.last.toLowerCase()  ? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {
  const result = [];
  for (let bookNumber in books){
    const found = books[bookNumber].borrows.find((borrow) => borrow.id === account.id);
    if (found){
      result.push(found);
    }
  }
  return result.length;
}

function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function getBooksPossessedByAccount(account, books, authors) {
  //Tried to use require function, but live web threw uncaught reference errors so I just copied the function I needed from books.js.
  //const { findAuthorById } = require("./books.js");
  const booksBorrowed = books.filter((book) => book.borrows.some((borrow) => !borrow.returned && borrow.id === account.id));
  booksBorrowed.forEach((book) => book.author = findAuthorById(authors, book.authorId));
  return booksBorrowed;
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
