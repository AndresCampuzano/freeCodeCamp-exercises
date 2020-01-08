// Write a function list that joins words in an array into a list. list(['Huey', 'Dewey', 'Louie']) should return 'Huey, Dewey and Louie'. The passed array contains at least two words.

function list (par) {
    var array = par; // ['Ernie', 'Bert']
    if (array.length === 2) {
        var s1 = array.join(' and ');
        return s1; // 'Ernie and Bert'
    } if (array.length > 2) { // ['Huey', 'Dewey', 'Louie']

        var last1 = array.length -2;
        var last2 = array.length;
        var s2 = array.slice(last1, last2);
        // s2: [ 'Dewey', 'Louie' ]
        // this always will get the last two elements of the array

        // Here we remove the last two elements but from the original array
        array.splice(last1, last2)
        // s2: [ 'Dewey', 'Louie' ]
        var s3 = s2.join(' and ')
        // s3: 'Dewey and Louie'
        // array: [ 'Huey' ]

        // array.push(s3)
        // return array; // [ 'Huey', 'Dewey and Louie' ]
        if (array.length === 1) {
            return array + ', ' + s3; // 'Huey, Dewey and Louie'
        } else {
            var s4 = array.join(', ')
            return s4 + ', ' + s3;
        }

    }
}
