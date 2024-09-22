function countSheeps(sheep) {
    let counter = 0;
  sheep.map(s => {s === true ? counter++ : 0;})
  return counter;
}

console.log(countSheeps([true,true,true,false,true,true,true,true,true,false,true,false,true,false,false,true,true,true,true,true,false,false,true,true]));
