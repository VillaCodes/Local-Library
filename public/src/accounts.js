function findAccountById(accounts, id) {
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].id === id) {
      return accounts[i]
    }
  }
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((firstAccount, nextAccount) => firstAccount.name.last.toLowerCase() > nextAccount.name.last.toLowerCase() ? 1 : -1)
}

function getTotalNumberOfBorrows(account, books) {
  let totalBorrows = [];
  let accumulator = 0;
  for (let i = 0; i < books.length; i++) {
    for (let j = 0; j < books[i].borrows.length; j++){
    if (account.id === books[i].borrows[j].id) {
      totalBorrows.push(1)
    }
    }
  }
 let mappedBorrows = totalBorrows.map((borrows) => borrows * 1)
 return mappedBorrows.reduce((acc, borrow) => acc + borrow, accumulator);
 }
// following function retrievedBooks is a helper function
function retrievedBooks (account, books) {
  let id = account.id
  let allBooksCheckedOut = [];
  for (let i = 0; i < books.length; i ++) {
    if (books[i].borrows[0].returned === false && books[i].borrows[0].id === id) {
      allBooksCheckedOut.push(books[i])
    }
  }
  return allBooksCheckedOut
}
// previous function retrievedBooks is a helper function used within this next function
function getBooksPossessedByAccount(account, books, authors) {
  
  let possessedByAccount = retrievedBooks (account, books);
  
  for (let i = 0; i < possessedByAccount.length; i++) {
    for (let j = 0; j < authors.length; j++) {
      if (possessedByAccount[i].authorId === authors[j].id) {
        possessedByAccount[i].author = authors[j]
      }
    }
  }
  return possessedByAccount
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
