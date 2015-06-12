//Create Book constructor with title and author.
function Book(title, author) {
  this.title = title;
  this.author = author;
}

//Export Book constructor.
module.exports.book = Book;
