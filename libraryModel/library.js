//Require shelf file with nested constructor.
var Shelf = require("./shelf");

//Create Library constructor.
function Library(name) {
  this.name = name;
  //Create method that creates a new Shelf.
  this.addShelf = function(genre) {
    this[genre] = new Shelf(genre);
  };
  //Create method the removes a Shelf.
  this.removeShelf = function(genre) {
    delete this[genre];
  };
}
