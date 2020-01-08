// Write a function median that takes an array of ascending numbers and returns the median of that numbers. median([1, 2, 10]) should return 2 and median([1, 2, 10, 100]) should return 6.


function median (par1) {
    var array = par1;

    if (array.length === 1) {
        return array[0];
    }
    else if (array.length === 2) {
        var x = (array[0] + array[1])/2;
        return x;
    } 
    else if (array.length % 2 === 1) { // array impar
        var y = (array.length / 2) + 0.5;
        return y;
    }
    else if (array.length % 2 !== 1) { // array par
        var z = (array.length / 2) -1;
        var r = ((array.length / 2) + 1) - 1;
        var p = (array[z] + array[r]) / 2
        return p;
    }
}


median([1]) // returns 1.

median([1, 2]) // returns 1.5.

median([1, 2, 10]) // returns 2.

median([1, 1, 2, 10, 100, 101]) // returns 6.