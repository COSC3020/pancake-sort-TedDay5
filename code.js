function flip(array, n) {
    for (i = 0; i < Math.floor(n / 2); i++) {
        [array[i], array[n - (i + 1)]] = [array[n - (i + 1)], array[i]];
    }
    return array;
}

// Use only flip() here to manipulate the array
function pancakeSort(array) {
    let max = 0;

    for (i = 0; i < array.length; i++) {
        max = largest(array, array.length - i);
        flip(array, max + 1);
        flip(array, array.length - i);
    }
    return array;
}

function largest(array, n) {
    let max = 0;

    for (i = 0; i < n; i++) {
        if(array[i] > array[max]) {
            max = i;
        }
    }
    return max;
}
