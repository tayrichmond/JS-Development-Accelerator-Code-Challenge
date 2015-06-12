//create function that finds the average awesome index of an array of objects.
function findAwesomeAverage(objectArray) {
  //create new array with programmers who have an awesome index.
  var newArray = _(objectArray).filter({occupation: "programmer"}).filter("awesomeIndex");

  //find the average awesome index
  var awesomeAverage = _(newArray).reduce(function(total, prog, i, array) {
     return total + prog.awesomeIndex/array.length;
  }, 0);

  return awesomeAverage;
}

//Invoke the function on the object.
var average = findAwesomeAverage(
[
  {
    name: "Bob",
    occupation: "programmer",
    awesomeIndex: 7,
  },
  {
    name: "Alice",
    occupation: "programmer",
    awesomeIndex: 9,
  },
  {
    name: "Zaphod",
    occupation: "President of the Galaxy"
  }
]);

//send info to the document
$(function() {
  $("#awesome-index").html(average);
});
