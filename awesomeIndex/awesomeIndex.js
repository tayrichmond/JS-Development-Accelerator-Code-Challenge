//create a function the finds the average awesome index of an array of objects.
function findAwesomeAverage(objectArray) {
  var sum = 0;
  var count = 0;

  for (var i = 0; i < objectArray.length; i++) {
    var person = objectArray[i];

    //only deal with programmers with an awesome index
    if (person.occupation === "programmer" && typeof person.awesomeIndex !== "undefined") {
      //add indexes together, count how many people have index
      sum += person.awesomeIndex;
      count++;
    }
  };

  //find average
  var average = sum/count;

  return average;
}

//invoke the function on the object.
var awesomeAverage = findAwesomeAverage(
[
  {
    name: 'Bob',
    occupation: 'programmer',
    awesomeIndex: 7,
  },
  {
    name: 'Alice',
    occupation: 'programmer',
    awesomeIndex: 9,
  },
  {
    name: 'Zaphod',
    occupation: 'President of the Galaxy'
  }
]);

//send info to document
var el = document.getElementById("awesome-index");
el.innerHTML = awesomeAverage;
