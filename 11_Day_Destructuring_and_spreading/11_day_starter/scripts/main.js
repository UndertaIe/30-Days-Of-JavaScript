// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

const numbers = [1, 2, 3]

let [numOne, numTwo, numThree] = numbers
console.log(numOne, numTwo, numThree)

let v1,v2,v3 = numbers
console.log(v1,v2,v3)

let [vv1,vv2 ] = numbers
console.log(vv1,vv2)

let [numOne2, , numThree2] = numbers //2 is omitted
console.log(numOne2, numThree2)

const names = [undefined, 'Brook', 'David']
let [
  firstPerson = 'Asabeneh',
  secondPerson,
  thirdPerson,
  fourthPerson = 'John'
] = names
console.log(firstPerson, secondPerson, thirdPerson, fourthPerson)  

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums
console.log(num1, num2, num3)
console.log(rest)

let [num11, num22, num33, ...rest2] = nums

console.log(num11, num22, num33)
console.log(rest2)

const evens = [0, 2, 4, 6, 8, 10]
const evenNumbers = [...evens]
const odds = [1, 3, 5, 7, 9]
const oddNumbers = [...odds]
const wholeNumbers = [...evens, ...odds]
console.log(evenNumbers)
console.log(oddNumbers) 
console.log(wholeNumbers)


const user = {
    name:'Asabeneh',
    title:'Programmer',
    country:'Finland',
    city:'Helsinki'
  }
const copiedUser = {...user}
console.log(copiedUser)

const copiedUserA = {...user, title:'instructor'}
console.log(copiedUserA)