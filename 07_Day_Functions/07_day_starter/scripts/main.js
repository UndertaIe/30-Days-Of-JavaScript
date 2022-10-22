// console.log(countries)
// alert('Open the console and check if the countries has been loaded')


function f() {
    console.log("hello,javascript!")
}
f()

function f2(i) {
    return i*i
}
let input = 2
let ans = f2(input)
console.log(`input: ${input}, ans: ${ans}`)

function f3(i, j) {
    return i + 2*j
}
console.log(f3(2,2))

function f33(i, j,...args) {
    console.log(i)
    console.log(j)
    console.log(args)
}
f33(2,2,34,5,6)


function f4() {
    console.log(arguments)
}
f4()
f4(1,2,3,4)


// arrow function
let f5 = (...args) => {
    // console.log(arguments), arguments object not found in arrow function
    // instead we use a parameter followed by spread operator (...)
    console.log(args)
}
f5(1, 2, 3, 4);

// anonymous function
const f6 = function() {
    console.log("anonymous function")
};
f6();

// self invoking functions 
(function(n) {
    console.log(n * n)
})(2); // 4, b


const f7 = (i, j) => {
    return i * j
  }
console.log("f7: ", f7(2,4))

function f8(name="mikasa"){
    return name.toUpperCase()
}

console.log("f8(name): ", f8())
console.log("f8(name): ", f8('ai'))
