const squareSum = (numbers) => {
    if(numbers.length == 0)return 0;
        return numbers.reduce((accumulator, nums) => {
            return accumulator += nums ** 2;
        })
    
}

console.log(squareSum([1,2]));
console.log(squareSum([0, 3, 4, 5]));
console.log(squareSum([])); 
console.log(squareSum([3,17]));

