function countPositivesSumNegatives(input) {
    let postiveValue = input.filter((value) => value !== 0).filter((findP) => findP > 0 ).length;
    let negativeValue = input.filter((value) => value !== 0).filter((findN) => findN < 0 ).reduce((acc,nums) => {
      return acc += nums;
    })

    return [postiveValue,negativeValue]
  }

  console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]));