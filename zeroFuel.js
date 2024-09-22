const zeroFuel = (distanceToPump, mpg, fuelLeft) => {return (mpg * fuelLeft) >= distanceToPump};
console.log(zeroFuel(50, 25, 2))