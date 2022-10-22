// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

arr = [1,2,3,4]
console.log("before change arr: ", arr)
change = function(arr) {
    for(let i=0;i<arr.length;i++){
        arr[i] = arr[i]+1
    }
    console.log("inner arr: ", arr)
}
change(arr)
console.log("after change arr: ", arr)

obj = {"A":"B"}
console.log("before change obj: ", obj)
change = function(obj) {
    obj.A = "C"
    console.log("inner obj: ", obj)
}
change(obj)
console.log("after change obj: ", obj)

let i = 1;
console.log("before change i: ", i)
change = function(i) {
    i = 99;
    console.log("inner i: ", i)
}
change(i)
console.log("after change i: ", i)

let s = "beijing";
console.log("before change s: ", s)
change = function(s) {
    s = "henan";
    console.log("inner s: ", s)
}
change(s)
console.log("after change s: ", s)

f = function() {
    console.log("origin func")
}
change = function(f) {
    f = function(){
        console.log("changed func")
    }
    return f
}
ff = change(f)
f()
ff()


const numbers = [1, 2, 3, 4, 5]
sum = 0
numbers.forEach(e => sum+=e)
console.log("The sum of Numbers: ", sum)
timeout = 5000;
EnabledIntervalTime = false
if (EnabledIntervalTime) {
    setInterval(function(){
        console.log("hello,javascript...")
    }, timeout)
}

EnabledTimeOut = false
if (EnabledTimeOut) {
    setTimeout(() => {
        console.log("hello,javascript...")
    }, timeout);
}

const numbersSquare = numbers.map((num) => num * num)

console.log(numbersSquare)


const countriesContainingLand = countries.filter((country) =>
  country.name.includes('land')
)
console.log(countriesContainingLand)

const sum2 = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(sum2)

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const areAllStr = (names) => names.every((name) => typeof name === 'string') // Are all strings?
console.log(areAllStr(names))
const names2 = ['Asabeneh', 1, 'Elias', 'Brook'] 
console.log(areAllStr(names2))

const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)
console.log(age)


const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']

const numbers3 = [9.81, 3.14, 100, 37]
// Using sort method to sort number items provide a wrong result. see below
console.log(numbers3.sort()) //[100, 3.14, 37, 9.81]

ans = numbers3.sort(function (a, b) {
    return a-b
  })
console.log(ans)

