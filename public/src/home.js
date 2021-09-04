function getTotalBooksCount(books) {
  let totalBooks = 0;
  for (let i = 0; i < books.length; i++) {
    totalBooks += 1
  }
  return totalBooks
}

function getTotalAccountsCount(accounts) {
  let totalAccounts = 0;
  for (let i = 0; i < accounts.length; i++) {
    totalAccounts += 1
  }
  return totalAccounts
}

function getBooksBorrowedCount(books) {
  let borrowedBooks = [];
  for (let i = 0; i < books.length; i++){
    books[i].borrows[0].returned === false ? borrowedBooks.push(books[i]) : null;
  }
  return borrowedBooks.length
}

function getMostCommonGenres(books) {
  let genres = [];
  
  for (let i = 0; i < books.length; i++) {
      let found = genres.find((genre) => genre.name === books[i].genre)
      if (!found) {
      let genre = {}
      genre.name = books[i].genre
      genre.count = 1;
      genres.push(genre)
      } else {
        found.count += 1
      }        
    }
  genres.sort((genre1, genre2) => genre1.count < genre2.count ? 1 : -1)
  return genres.slice(0, 5)
 }

function getMostPopularBooks(books) {
  
  const formattedBooks = [];
  
  for (let i = 0; i < books.length; i++) {
    let name = books[i].title;
    let count = books[i].borrows.length;
    let newObject = {name, count}
    formattedBooks.push(newObject)
  }
  
  formattedBooks.sort((book1, book2) => book1.count < book2.count ? 1 : -1)
 
  const topFive = formattedBooks.slice(0, 5)
 
  return topFive
}

function getMostPopularAuthors(books, authors) {
  let popularAuthors = [];
  
    for (let i = 0; i < authors.length; i++) {
      let authorCatalogue = books.filter(book => book.authorId === authors[i].id);
      let newObject = {};
      newObject.name = authors[i].name.first + " " + authors[i].name.last
      newObject.count = 0
      
      for (let j = 0; j < authorCatalogue.length; j++) {
        newObject.count += authorCatalogue[j].borrows.length
      }
      popularAuthors.push(newObject)
    }
  
  
  popularAuthors.sort((author1, author2) => author1.count < author2.count ? 1 : -1)
  return popularAuthors.slice(0, 5)
  
  }
   
 
 
  


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
