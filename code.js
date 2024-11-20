function flip(array, n) {
    for (i = 0; i < Math.floor(n/2); i++) {
        [array[i], array[n - (i + 1)]] = [array[n - (i + 1)], array[i]];
    }
    return array;
}

// Use only flip() here to manipulate the array
function pancakeSort(array) {
    let max = 0;

    for (j = 0; j < array.length; j++) {
        max = largest(array, array.length - j);
        flip(array, max + 1);
        flip(array, array.length - j);
    }
    return array;
}

function largest(array, l) {
    let max = 0;

    for (m = 0; m < l; m++) {
        if(array[m] > array[max]) {
            max = m;
        }
    }
    return max;
}
