// https://www.jshero.net/en/koans/slice.html

// Write a function halve that copies the first half of an array. With an odd number of array elements, the middle element should belong to the first half. halve([1, 2, 3, 4]) should return [1, 2].

function halve (num) {
    var myArray = num;
    // var halfArray = myArray.length / 2 + 1;
    if (myArray.length % 2 !== 1) { //Array par
        var halfArrayPar = myArray.length / 2;
        return myArray.slice(0, halfArrayPar)
    } else { // Array impar
        var halfArrayImpar = myArray.length / 2 + 0.5;
        return myArray.slice(0, halfArrayImpar)
    }
}


halve has 1 parameter.

halve([1, 2]) returns [ 1 ].

halve([1, 2, 3]) returns [ 1, 2 ].

halve([1, 2, 3, 4]) returns [ 1, 2 ].

halve([1, 2, 3, 4, 5]) returns [ 1, 2, 3 ].

