// Write a function setFirstElement that takes an array and an arbitrary variable. The variable should be inserted as the first element in the array. The array should be returned. setFirstElement([1, 2], 3) should return [3, 2].

function setFirstElement (par1, par2) {
    var array = par1;
    array.shift();
    array.unshift(par2);
    return array;
}



// etFirstElement has 2 parameter.

setFirstElement([1, 2], 3) // returns [ 3, 2 ].

setFirstElement([], 1) // returns [ 1 ].

setFirstElement(['a', 'b', 'c'], 'x') // returns [ 'x', 'b', 'c' ].