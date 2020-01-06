// Write a function concatUp that concatenate two arrays. The longer array should be appended to the shorter array. If both arrays are equally long, the second array should be appended to the first array. concatUp([1, 2], [3]) should return [3, 1, 2] and concatUp([5, 7], [6, 8]) should return [5, 7, 6, 8].


function concatUp (par1, par2) {
    var arrayPar1 = par1;
    var arrayPar2 = par2;


    if (arrayPar1.length > arrayPar2.length) {
        var conc1 = arrayPar2.concat(arrayPar1);
        return conc1;
    } else if (arrayPar2.length > arrayPar1.length) {
        var conc2 = arrayPar1.concat(arrayPar2);
        return conc2;
    } else if (arrayPar1.length === arrayPar2.length) {
        var conc3 = arrayPar1.concat(arrayPar2)
        return conc3
    }
}