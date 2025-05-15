// Challenge 1 Problem 2

function squareDiff(n, ...nums) {
    if (nums.length !==n * n) {
        return "Invalid Input";
    }
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let i = 0; i < n; i++){
        primaryDiagonalSum += nums[i * n + i];
        secondaryDiagonalSum += nums[i * n + (n - 1 - i)];
    }

    return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
}

console.log(squareDiff(3, 11, 2, 4, 4, 5, 6, 10, 8, -12));


