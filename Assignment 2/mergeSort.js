function mergeSort(array) {
    function merge(array1, array2) {
    let array = [], i = 0, j = 0;
    let copy;

    while (i < array1.length && j < array2.length) {
        if (array1[i] > array2[j]) {
            array.push(array2[j]);
            j++
        }
        if (array1[i] < array2[j]) {
            array.push(array1[i]);
            i++
        }
        if (array1[i] === array2[j] ) {
            array.push(array1[i]);
            i++
        }
    }

    if (i >= array1.length) {
        copy = array2.slice(j)
    } else if (j >= array2.length) {
        copy = array1.slice(i)
    }

    return array.concat(copy);
}

    if (array.length <= 1) {
        return array
    } else {
        let mid = Math.floor(array.length / 2);
        let left = mergeSort(array.slice(0, mid));
        let right = mergeSort(array.slice(mid));

        return merge(left, right);
    }
}

console.log(mergeSort([1]));
console.log(mergeSort([4, 5, 3]));
console.log(mergeSort([2,6,4,3,9,11,2,1]));
console.log(mergeSort([1, 68904, 42, 583, 342, 593, 29, 1, 2, 3 ,5, -2, -1]));