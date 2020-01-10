// Write a function factorial that calculates the factorial of a positive integer. factorial(3) should return 6.



function factorial (par1) {
    var result = 1;
    for (var i = 1; i <= par1; i++) {
        var result = result * i;
    }

    return result;
}



factorial(0) // returns 1.

factorial(1) // returns 1.

factorial(2) // returns 2.

factorial(3) // returns 6.

factorial(4) // returns 24.

factorial(9) // returns 362880.

// All tests passed!