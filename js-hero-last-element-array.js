// Write a function getLastElement that takes an array and returns the last element of the array. getLastElement([1, 2]) should return 2.


function getLastElement (obj) {
    var getLastElementArray = obj
    var lastElement = getLastElementArray.length; // 2 (pero el numero, no el elemento)
    return getLastElementArray[lastElement - 1]
  }



  getLastElement([1, 2]) // returns 2.
  getLastElement(['a', 'b', 'c']) // returns 'c'.