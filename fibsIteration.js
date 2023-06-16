function fibsIteration(n) {

    let array = [];

    for (let i = 0; i < n; i++) {
        if (i === 0 || i === 1) {
            array.push(i);
        } else {
            array.push(array[i - 1] + array[i - 2]);
        }
    }

    return array;
}

console.log(fibsIteration(0))
console.log(fibsIteration(5))
console.log(fibsIteration(3))
console.log(fibsIteration(10))
