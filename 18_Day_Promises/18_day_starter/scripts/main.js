const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      if (skills.length > 0) {
        resolve(skills)
      } else {
        reject('Something wrong has happened')
      }
    }, 2000)
  })
  
doPromise.then(result => {
    console.log(result)
}).catch(error => console.log(error))
console.log("already started doPromise")

const url = 'https://restcountries.com/v2/all' // countries api
fetch(url)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => {
    // getting the data
    console.log(data)
  })
  .catch(error => console.error(error)) // handling error if something wrong happens
console.log("already started to fetch")

const square = async function (n) {
    return n * n
  }
const asyncCalc = async () => {
    val = await square(2)
    console.log("asyncCalc result: ", val)
}
asyncCalc()
console.log("asyncCalc started")


const fetchData = async () => {
    try {
      const responsePromise = fetch(url)
      console.log("fetch started already")
      response = await responsePromise
      console.log("fetch finish successfully")
      const countries = await response.json()
      console.log(countries)
    } catch (err) {
        console.log("fetch error")
      console.error(err)
    }
  }
console.log('===== async and await')
fetchData()
console.log('===== async and await2')