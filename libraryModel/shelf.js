function Shelf(genre) {
  this.genre = genre;
  this.addBook = function(title, author) {
    this[title] = new Book(title, author);
  };
  this.removeBook = function(title) {
    delete this[title];
  };
}

module.exports.shelf = Shelf;
