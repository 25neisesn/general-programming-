function gcd(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function smallestMultiple(limit) {
    let result =1;
    for (let i = 2; i <= limit; i++) {
        result = lcm(result, i);
    }
    return result;
}

console.log(smallestMultiple(20)); 