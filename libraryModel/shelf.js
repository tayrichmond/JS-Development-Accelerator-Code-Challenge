//Require book file with nested constructor.
var Book = require("./book");

//Create Shelf constructor.
function Shelf(genre) {
  this.genre = genre;
  //Create method that adds new Book.
  this.addBook = function(title, author) {
    this[title] = new Book(title, author);
  };
  //Create method that removes Book.
  this.removeBook = function(title) {
    delete this[title];
  };
}

//Export Shelf constructor.
module.exports.shelf = Shelf;
