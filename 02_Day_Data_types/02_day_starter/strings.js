let v = 1;
v = 2;
console.log(v)
v = "2abc";
console.log(v);

let randomNum = Math.random() // generates 0 to 0.999...
console.log(randomNum);


console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')

console.log(`The sum of 2 and 3 is 5`)              // statically writing the data
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically

let js = 'JavaScript'
console.log(js.length)         // 10
let firstName = 'Asabeneh'
console.log(firstName.length)  // 8

let c = js[0]
let cc = js[9]
console.log(c)
console.log(cc)

console.log(js.toLowerCase())
let t = "mikasa"
console.log(t.toUpperCase())
console.log(t.substring(1,3))
console.log(t.substr(2,5))

let string = '30 Days Of JavaScript'

console.log(string.split())     // Changes to an array -> ["30 Days Of JavaScript"]
console.log(string.split(' '))  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]

console.log(firstName.split())    // Change to an array - > ["Asabeneh"]
console.log(firstName.split(''))  // Split to an array at each letter ->  ["A", "s", "a", "b", "e", "n", "e", "h"]

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'

console.log(countries.split(','))  // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(', ')) //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]

let s = '   30 Days Of JavaScript   '

console.log(s)
console.log(s.trim(' '))

console.log(firstName)
console.log(firstName.trim())  // still removes spaces at the beginning and the end of the string


let ss = '30 Days Of JavaScript'

console.log(ss.includes('Days'))     // true
console.log(ss.includes('days'))     // false - it is case sensitive!
console.log(ss.includes('Script'))   // true
console.log(ss.includes('script'))   // false
console.log(ss.includes('java'))     // false
console.log(ss.includes('Java'))     // true

let country = 'Finland'

console.log(country.includes('fin'))     // false
console.log(country.includes('Fin'))     // true
console.log(country.includes('land'))    // true
console.log(country.includes('Land'))    // false