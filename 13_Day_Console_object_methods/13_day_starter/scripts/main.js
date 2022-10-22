// console.log(countries)
// alert('Open the console and check if the countries has been loaded')


console.log('30 Days of JavaScript')
console.log('%d %s of JavaScript', 30, 'Days')
console.warn(
    'You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!'
  )
  console.error('This is an error message')

  const names = ['Asabeneh', 'Brook', 'David', 'John']
console.table(names)

const countrie2s = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  console.table(countrie2s)


console.time('Regular for loop')
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i][0], countries[i][1])
}
console.timeEnd('Regular for loop')


console.time('for of loop')
for (const ele of countries) {
  console.log(ele)
}
console.timeEnd('for of loop')

console.info('30 Days Of HTML and CSS challenge might be released')
console.log('30 Days of JavaScript')
console.assert(4 > 5, '4 is greater than 5') // no result

const countries3 = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

console.group('Names')
console.log(names)
console.groupEnd()


const func = () => {
    console.count('Function has been called')
  }
  func()
  func()
  func()

  console.clear()