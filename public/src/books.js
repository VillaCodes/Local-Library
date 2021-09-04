function findAuthorById(authors, id) {
  let filteredAuthors = authors.filter(author => author.id === id)
  return filteredAuthors[0]  
}

function findBookById(books, id) {
  let filteredBooks = books.filter(book => book.id === id)
  return filteredBooks[0]
}

function partitionBooksByBorrowedStatus(books) {
  let partitionedBooks = [];
  let loanedBooks = [];
  let returnedBooks = [];
  for (let i = 0; i < books.length; i++) {
    books[i].borrows[0].returned === true ? returnedBooks.push(books[i]) : loanedBooks.push(books[i])
  }
  partitionedBooks.push(loanedBooks, returnedBooks)
  return partitionedBooks
}

function getBorrowersForBook(book, accounts) {
  let fixedBookTransactions = [];
  let bookTransactions = book.borrows
  for (let i = 0; i < bookTransactions.length; i++) {
    for (let j = 0; j < accounts.length; j++){
      if (bookTransactions[i].id === accounts[j].id) {
        let newObject = {};
        newObject.id = accounts[j].id
        newObject.returned = bookTransactions[i].returned
        newObject.picture = accounts[j].picture;
        newObject.age = accounts[j].age;
        newObject.name = accounts[j].name;
        newObject.company = accounts[j].company;
        newObject.email = accounts[j].email;
        newObject.registered = accounts[j].registered;
        fixedBookTransactions.push(newObject)
      }
    }
  }
  return fixedBookTransactions.slice(0, 10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
