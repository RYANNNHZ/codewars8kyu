const enough = (cap, on, wait) =>
  on + wait > cap ? Math.abs(cap - (on + wait)) : 0;

console.log(enough(10, 5, 5));
console.log(enough(100, 60, 50));
console.log(enough(20, 5, 5));
