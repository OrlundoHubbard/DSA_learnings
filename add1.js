
function addUpTo(n) {
    let total = 0; 
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

console.log(addUpTo(3));

// V.2
function addUpTo(n) {
    return n * (n + 1) / 2;
}

console.log(addUpTo(6));

// How you arrive at answer
6 * (6+1) / 2;