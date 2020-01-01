function sum(arr, n) {
    // Only change code below this line
    if (n <= 0) {
      return arr[0];
    } else {
      return sum(arr, n - 1) + arr[n];
    }
    // Only change code above this line
  }
  

//   sum([1], 0) should equal 1.
// Passed
// sum([2, 3, 4], 1) should equal 5.
// Passed
// Your code should not rely on any kind of loops (for or while or higher order functions such as forEach, map, filter, or reduce.).
// Passed
// You should use recursion to solve this problem.

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/replace-loops-using-recursion