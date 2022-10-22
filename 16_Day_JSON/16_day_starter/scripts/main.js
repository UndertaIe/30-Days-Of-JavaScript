// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

const usersText = `{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
    }`
    
const usersObj = JSON.parse(usersText, undefined, 4)
console.log(usersObj) // object
console.log(usersObj.users) // object

// 对键值对中key为email的value转换为大写
const usersObj2 = JSON.parse(usersText, (key, value) => {

    return typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
  })
console.log("usersObj2: ", usersObj2)


const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'Redux',
        'MongoDB',
        'Express',
        'React',
        'Node'
      ],
      age: 25,
      isLoggedIn: false,
      points: 50
    }
  }
  
const txt = JSON.stringify(users, undefined, 4)
console.log(txt, typeof txt) // text means JSON- because json is a string form of an object.




class Person{}
obj = new Person()
console.log(obj)// object
obj2 = {}
console.log(obj2) // object

