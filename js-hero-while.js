// Write a function spaces that takes a natural number n and returns a string of n spaces. spaces(1) should return ' '.

function spaces (par1) {
    var x = '';
 while (x.length < par1) {
     x = x + ' ';
 }
 return x;
}


spaces(0) // returns ''.

spaces(1) // returns ' '.

spaces(2) // returns '  '.

spaces(3) // returns '   '.