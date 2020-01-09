// Write a function addTo that accepts a number as a parameter and adds all natural numbers smaller or equal than the parameter. The result is to be returned. addTo(3) should return 1+2+3 = 6.


function addTo (par) {
    var sum = 0;
    for (var i = 0; i <= par; i++) {
        sum = sum + i;
    }
    return sum;
}
