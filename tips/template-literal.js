const horse = {
  name : "Topher 🐎 ",
  size : "large",
  skills : ['jousting', 'racing'],
  age : 7
}

'Bad Code 💩'

let bio = horse.name + ' is a ' + horse.size + ' horse skilled in ' + horse.skills.join(' & ')
console.log(bio)

'Good Code ✅'

const { name, size, skills } = horse;

bio = `${name} is a ${size} horse skilled in ${skills.join(' & ')}`
console.log(bio)

function horseAge(str, age) {
  const ageStr = age > 5 ? 'old' : 'yound';
  return `${str[0]}${ageStr} at ${age} years`;
}

// What the fuck ?? Template literal
bio2 = horseAge`This horse is ${horse.age}`;
console.log(bio2)