#!/usr/bin/node

function fibsRec(n) {
    if (n === 0) return [];
    if (n === 1) return [0];
    if (n === 2) return fibsRec(n-1).concat([1]);
    

    let array = fibsRec(n-1);
    let a = fibsRec(n-1).pop();
    let b = fibsRec(n-2).pop(); 
    let c = a + b;

    array = array.concat(c);
    
    return array;
}

console.log(fibsRecurse(0))
console.log(fibsRecurse(5))
console.log(fibsRecurse(3))
console.log(fibsRecurse(10))
