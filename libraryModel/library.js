var Shelf = require("./shelf");
var Book = require("./book");

function Library(name) {
  this.name = name;
  this.addShelf = function(genre) {
    this[genre] = new Shelf(genre);
  };
  this.removeShelf = function(genre) {
    delete this[genre];
  };
}
