function differenceOfSquares(n) {
    let sum = 0;
    let sumOfSquares = 0;

    for (let i = 1; i <=n; i++){
        sum += i;
        sumOfSquares += i * i;
    }

    let squareOfSum = sum * sum;
    return squareOfSum - sumOfSquares;
}
console.log(differenceOfSquares(100));