// Write a function add that adds an element to the end of an array. However, the element should only be added if it is not already in the array. add([1, 2], 3) should return [1, 2, 3] and add([1, 2], 2) should return [1, 2].


// THERE ARE TWO WAYS

// HARD AND CONFUSING WAY:

 function add (par1, par2) {
     var myArray = [];
     myArray.push(par1);
     myArray.push(par2);
     // [ [ 'J' ], 'S' ]
      if (myArray[0].indexOf(par2) === -1) {
         myArray[0].push(par2); // [ [ 'J', 'S' ], 'S' ]
         myArray.pop(); // [ [ 'J', 'S' ] ]
         return myArray[0];
      }    else {
          myArray = par1;
          return myArray
      }
 }



 add(['J'], 'S') // returns [ 'J', 'S' ].

 add(['J'], 'J') // returns [ 'J' ].

 add([1, 2], 3) // returns [ 1, 2, 3 ].

 add([1, 2], 2) // returns [ 1, 2 ].


 // EASIER AND BETTER WAY:


// function add (par1, par2) {
//     var myArray = par1
//     if (myArray.indexOf(par2) === -1) {
//         myArray.push(par2)
//         return myArray
//     } else {
//         myArray = par1
//         return myArray
//     }
// }