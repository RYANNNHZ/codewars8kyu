function updateLight(current) {
  switch (current) {
    case "green":
      return "yellow";
      break;
    case "yellow":
      return "red";
      break;
    case "red":
      return "green";
      break;
  }
}

const updateLight2 = (current) =>
  ({
    green: "yellow",
    yellow: "red",
    red: "green",
  })[current];

console.log(updateLight("green"));
console.log(updateLight2("yellow"));
