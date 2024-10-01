function abbrevName(name){
    let str = name.split(" ");
    return `${str[0][0]}.${str[1][0]}`.toUpperCase();
}

console.log(abbrevName("sam Harris"))