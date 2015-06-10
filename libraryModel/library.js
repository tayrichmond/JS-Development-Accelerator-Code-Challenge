var Library = {
  genres: ["horror", "mystery", "romance", "fantasy", "nonfiction"],
  numberOfShelves: 0,
  addShelf: function(genresIndex) {
    var propertyName = genres[genresIndex] + "Shelf";
    var newShelf = new Shelf();

    return Library.propertyName = newShelf;
  },
  removeShelf: function(property) {
    delete this["property"];
  }
};
