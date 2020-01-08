// Write a function flat that flattens a two-dimensional array with 3 entries. flat(loshu) should return [4, 9, 2, 3, 5, 7, 8, 1, 6]. Thereby loshu is the magic square from the example above.


// https://www.jshero.net/en/koans/dimarray.html


// [ [], [], [] ]

function flat (par1) {
    var array = par1;
    var a = array[0];
    var b = array[1];
    var c = array[2];

    var d = a.concat(b);
    var e = d.concat(c);
    return e;
}