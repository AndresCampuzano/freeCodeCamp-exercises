// Write a function rotate that rotates the elements of an array. All elements should be moved one position to the left. The 0th element should be placed at the end of the array. The rotated array should be returned. rotate(['a', 'b', 'c']) should return ['b', 'c', 'a'].

function rotate(m) {
  var anotherArray = m; // ['a', 'b', 'c']
  var firstElement = anotherArray.shift();
  anotherArray.push(firstElement);
  return anotherArray;
}

rotate([1, 2]) // returns [ 2, 1 ].

rotate(['a', 'b', 'c']) // returns [ 'b', 'c', 'a' ].

rotate([1, 'b', 'c', 37]) // returns [ 'b', 'c', 37, 1 ].