// Write a function mean that accepts an array filled with numbers and returns the arithmetic mean of those numbers. mean([1, 2, 3]) should return (1+2+3)/3 = 2.

function mean (array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum = sum + array[i]; 
    }
    sum = sum / array.length;
    return sum;
}

mean([0]) // returns 0.

mean([1, 2]) // returns 1.5.

mean([1, 2, 3]) // returns 2.

mean([-2, -4, 17, 34]) // returns 11.25.