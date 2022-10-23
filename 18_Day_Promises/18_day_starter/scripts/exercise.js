

function printCountries(cs) {
    console.log(typeof cs)
    for (ele of cs) {
        console.log(`${ele.name}, ${ele.capital}, ${ele.languages}, ${ele.population }, ${ele.area }`)
    }
}

const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

async function fetchCountries(api){
    const resp = await fetch(api)
    const body = await resp.json()
    console.log(body)
    return body
}

fetchCountries(countriesAPI)
    .then((x)=> printCountries(x))
    .catch( err => console.error(err))

console.log("already started")
