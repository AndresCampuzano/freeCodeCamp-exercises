// Write a function sort that takes an array filled with 3 numbers and returns these 3 numbers sorted in ascending order as an array. sort([2, 3, 1]) should return [1, 2, 3].


function sort (num) {
    var sortArray = num; // [2, 3, 1]
    return sortArray.sort(); // [1, 2, 3]
  }


  sort([1, 2, 3]) // returns [ 1, 2, 3 ].

  sort([1, 3, 2]) // returns [ 1, 2, 3 ].
  
  sort([2, 1, 3]) // returns [ 1, 2, 3 ].
  
  sort([2, 3, 1]) // returns [ 1, 2, 3 ].
  
  sort([3, 1, 2]) // returns [ 1, 2, 3 ].
  
  sort([3, 2, 1]) // returns [ 1, 2, 3 ].